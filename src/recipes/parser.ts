import { parse as parseHtml, HTMLElement } from "node-html-parser"
import { RecipeType, type Recipe, RecipeSource, type MeasuredIngredient } from "$lib/recipes/Recipe"
import type { Rarity } from "$lib/rarity/Rarity"
import { IngredientType } from "$lib/recipes/Ingredient"
import { MeasureAmountFraction, type Measure, MeasureUnit, MeasureAmountDecimal, asPlural } from "$lib/recipes/Measure"
import type { Image } from "$lib/image/Image"

export function parseRecipe(rawHtml: string, attributes: Record<string, unknown>, imageSources: Image): Recipe {
	const html = parseHtml(rawHtml)

	const h1 = html.querySelector("h1")!
	const name = h1.textContent
	const id = (attributes.id as string) ?? idOf(name)
	const unlisted = attributes.published === false

	const { content: description, next: metaList } =
		readTextUntil(h1.nextElementSibling!, (node) => node.tagName !== "P")
	const { content: meta, next: afterMeta } =
		readMetaList(metaList!)
	const { next: ingredientsTable } =
		readTextUntil(afterMeta!, (node) => node.tagName === "TABLE")
	const { content: ingredients, next: afterIngredients } =
		readIngredientsTable(ingredientsTable!)
	const { next: stepsList } =
		readTextUntil(afterIngredients!, (node) => node.tagName === "OL")
	const { content: directions, next: afterDirections } =
		readSimpleList(stepsList!)
	const { next: gameIngredientsList } =
		readTextUntil(afterDirections!, (node) => node.tagName === "UL")
	const { content: gameIngredients, next: afterGameIngredients } =
		readGameIngredients(gameIngredientsList!)
	const { content: interpretation, next: afterInterpretation } =
		readHtmlUntil(afterGameIngredients!, (node) => node.tagName !== "P")

	let references: string[] | undefined = undefined
	if (afterInterpretation != null) {
		const { next: referencesList } =
			readTextUntil(afterInterpretation!, (node) => node.tagName === "UL")
		const { content: parsedReferences } =
			readSimpleList(referencesList!)

		references = parsedReferences
	}

	return {
		id: id,
		name: name,
		unlisted: unlisted,
		type: meta.type,
		source: meta.source,
		rarity: meta.rarity,
		timeInMinutes: meta.timeInMinutes,
		image: {
			...imageSources,
			alt: name,
		},
		description: description.join("\n"),
		ingredients: ingredients,
		directions: { steps: directions },
		gameIngredients: gameIngredients,
		interpretation: interpretation.join(""),
		references: references,
	}
}

function idOf(name: string): string {
	return name.toLowerCase().replace(/\s+/g, "-")
}

function readTextUntil(node: HTMLElement, stop: (node: HTMLElement) => boolean): {
	content: string[],
	next: HTMLElement | null,
} {
	const content: string[] = []
	let next: HTMLElement | null = node

	while (next != null && !stop(next)) {
		content.push(next.textContent)
		next = next.nextElementSibling
	}

	return { content, next }
}

function readHtmlUntil(node: HTMLElement, stop: (node: HTMLElement) => boolean): {
	content: string[],
	next: HTMLElement | null,
} {
	const content: string[] = []
	let next: HTMLElement | null = node

	while (next != null && !stop(next)) {
		content.push(next.outerHTML)
		next = next.nextElementSibling
	}

	return { content, next }
}

function readMetaList(node: HTMLElement): {
	content: Pick<Recipe, "type" | "source" | "rarity" | "timeInMinutes">
	next: HTMLElement | null,
 } {
	const list = Array.from(node.querySelectorAll("li"))
	if (list.length !== 4) {
		throw new RecipeParserError("The meta list should have 4 things in this order: Type, Source, Time, Rarity")
	}

	const type = extractRegexValue(/Type: (.+)/, list[0].textContent).toLocaleLowerCase()
	const source = extractRegexValue(/Source: (.+)/, list[1].textContent)
	const timeInMinutes = parseInt(extractRegexValue(/Time: (\d+) minutes/, list[2].textContent))
	const rarity = parseInt(extractRegexValue(/Rarity: (\d+)/, list[3].textContent))

	validateOneOf(type, Object.values(RecipeType))
	validateOneOf(source, Object.values(RecipeSource))
	validateOneOf(rarity, [1, 2, 3])

	return {
		content: {
			type: type as RecipeType,
			source: source as RecipeSource,
			rarity: rarity as Rarity,
			timeInMinutes: timeInMinutes,
		},
		next: node.nextElementSibling,
	}
}

function readIngredientsTable(node: HTMLElement): {
	content: MeasuredIngredient[],
	next: HTMLElement | null,
} {
	const rows = Array.from(node.querySelectorAll("tbody tr"))
	const ingredients: MeasuredIngredient[] = []

	for (const row of rows) {
		const cells = Array.from(row.querySelectorAll("td"))
		if (cells.length !== 4) {
			throw new RecipeParserError("Each row in the ingredients table should have 4 cells: name, amount, rarity, and type")
		}

		const { name, preparation } = parseIngredientName(cells[0].textContent)
		const measure = cells[1].textContent
		const rarity = parseInt(cells[2].textContent)
		const type = cells[3].textContent

		validateOneOf(type, Object.values(IngredientType))
		validateOneOf(rarity, [1, 2, 3])

		ingredients.push({
			name: name,
			type: type as IngredientType,
			rarity: rarity as Rarity,
			preparation: preparation,
			measure: parseMeasure(measure),
		})
	}

	return { content: ingredients, next: node.nextElementSibling }
}

function parseIngredientName(name: string): {
	name: string,
	preparation?: string,
} {
	const match = name.match(/(.+) \((.+)\)/)
	if (match != null) {
		return { name: match[1], preparation: match[2] }
	}

	return { name: name }
}

// I'm too dumb to do this a better way
function parseMeasure(measure: string): Measure | undefined {
	const unit = (s: string) => (s ?? "") === "" ? MeasureUnit.Quantity : asPlural(s)

	const isWholeAndFraction = measure.match(/^(\d+)\s+(\d+)\/(\d+)\s*(.*)$/)
	if (isWholeAndFraction) {
		const whole = parseInt(isWholeAndFraction[1])
		const numer = parseInt(isWholeAndFraction[2])
		const denom = parseInt(isWholeAndFraction[3])
		return {
			amount: MeasureAmountFraction(whole * denom + numer, denom),
			unit: unit(isWholeAndFraction[4]),
		}
	}

	const isFraction = measure.match(/^(\d+)\/(\d+)\s*(.*)$/)
	if (isFraction) {
		return {
			amount: MeasureAmountFraction(parseInt(isFraction[1]), parseInt(isFraction[2])),
			unit: unit(isFraction[3]),
		}
	}

	const isDecimal = measure.match(/^(\d+\.\d+)\s*(.*)$/)
	if (isDecimal) {
		return {
			amount: MeasureAmountDecimal(parseFloat(isDecimal[1])),
			unit: unit(isDecimal[2]),
		}
	}

	const isWhole = measure.match(/^(\d+)\s*(.*)$/)
	if (isWhole) {
		return {
			amount: MeasureAmountFraction(parseInt(isWhole[1])),
			unit: unit(isWhole[2]),
		}
	}

	const isEmpty = measure.match(/^-$/)
	if (isEmpty) {
		return undefined
	}

	throw new RecipeParserError(`Failed to parse measure ${measure}`)
}

function readSimpleList(node: HTMLElement): {
	content: string[],
	next: HTMLElement | null,
} {
	const items = Array.from(node.querySelectorAll("li"))
		.map((item) => item.textContent)

	return {
		content: items,
		next: node.nextElementSibling,
	}
}

function readGameIngredients(node: HTMLElement): {
	content: Record<string, number>,
	next: HTMLElement | null,
} {
	const ingredients = Array.from(node.querySelectorAll("li")).reduce((all, ingredient) => {
		const match = ingredient.textContent.match(/(.+?):\s*(\d+)/)
		if (!match) {
			throw new RecipeParserError(`Failed to match game ingredient regex in text ${ingredient.textContent}`)
		}

		return {
			...all,
			[match[1]]: parseInt(match[2]),
		}
	}, {})

	return {
		content: ingredients,
		next: node.nextElementSibling,
	}
}

function extractRegexValue(regex: RegExp, text: string): string {
	const match = text.match(regex)
	if (match == null) {
		throw new RecipeParserError(`Failed to match regex ${regex} in text ${text}`)
	}

	return match[1]
}

function validateOneOf<T>(value: T, options: T[]) {
	if (!options.includes(value)) {
		throw new RecipeParserError(`Value ${value} is not one of ${options.join(", ")}`)
	}
}

class RecipeParserError extends Error {
	constructor(message: string) {
		super(message)
	}
}
