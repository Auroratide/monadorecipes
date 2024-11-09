import { isDecimal, pluralizedMeasureUnit } from "../Measure"
import type { MeasuredIngredient, Recipe } from "../Recipe"

type IsoDuration = string

export type StructuredRecipe = {
	"@context": "https://schema.org",
	"@type": "Recipe",
	"name": string,
	"description": string,
	"image": string,
	"cookTime": IsoDuration,
	"recipeIngredient": string[],
	"recipeInstructions": string[],
}

export function structuredRecipe(recipe: Recipe): StructuredRecipe {
	return {
		"@context": "https://schema.org",
		"@type": "Recipe",
		"name": recipe.name,
		"description": recipe.description,
		"image": recipe.image.fallback.src,
		"cookTime": `PT${recipe.timeInMinutes}M`,
		"recipeIngredient": recipe.ingredients.map(structuredIngredient),
		"recipeInstructions": recipe.directions.steps,
	}
}

function structuredIngredient(ingredient: MeasuredIngredient): string {
	let measureString = ""
	const measure = ingredient.measure
	if (measure != null) {
		if (isDecimal(measure.amount)) {
			measureString = measure.amount.decimal.toString()
		} else {
			const whole = Math.floor(measure.amount.numerator / measure.amount.denominator)
			const numerator = measure.amount.numerator % measure.amount.denominator
			const denominator = measure.amount.denominator

			measureString = `${whole > 0 ? `${whole} ` : ""}${numerator > 0 ? `${numerator}/${denominator}` : ""}`
		}

		measureString += ` ${pluralizedMeasureUnit(measure.unit, measure.amount)}`
	}

	return `${measureString} ${ingredient.name} ${ingredient.preparation ? `(${ingredient.preparation})` : ""}`.trim()
}