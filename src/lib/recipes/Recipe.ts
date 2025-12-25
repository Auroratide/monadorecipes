import type { Ingredient } from "$lib/recipes/Ingredient"
import type { Rarity } from "$lib/rarity/Rarity"
import type { Measure } from "$lib/recipes/Measure"
import type { RichText } from "$lib/rich-text/RichText"
import type { Image, WithAlt } from "$lib/image/Image"

export const RecipeType = {
	Meat: "meat",
	Veggie: "veggie",
	Staple: "staple",
	Dessert: "dessert",
	Seafood: "seafood",
} as const
export type RecipeType = typeof RecipeType[keyof typeof RecipeType]

export const RecipeSource = {
	Aegaeon: "Aegaeon's Refined Cuisine",
	Crossette: "Crossette's Cooking",
	Jin: "Jin's Home Cooking",
	Gorg: "Just Desserts",
	Mythra: "Mythra's \"Creative\" Cuisine",
	Pyra: "Pyra's Cooking",
	Vess: "Vess's Dumplings",
	Manana: "Manana's Menu",
	Redeemed: "Redeemed Menu",
} as const
export type RecipeSource = typeof RecipeSource[keyof typeof RecipeSource]

export type ReferenceLink = {
	name: string,
	href: string,
}

export type Recipe = {
	id: string,
	name: string,
	unlisted?: boolean,
	tags: string[],
	type: RecipeType,
	source: RecipeSource,
	rarity: Rarity,
	timeInMinutes: number,
	prepInMinutes: number,
	image: Image & WithAlt,
	description: string,
	// ingredients: MeasuredIngredient[],
	ingredients: IngredientGroup[],
	directions: Directions,
	gameIngredients: Record<string, number>,
	interpretation: RichText,
	references?: ReferenceLink[],
}

export type IngredientGroup = {
	name: string,
	ingredients: MeasuredIngredient[],
}

export type MeasuredIngredient = Ingredient & {
	preparation?: IngredientPreparation,
	measure?: Measure,
}

export const IngredientPreparation = {
	Whole: "whole",
	Halved: "halved",
	Chopped: "chopped",
	Cubed: "cubed",
	Minced: "minced",
	Sliced: "sliced",
	Custom: (value: string) => value,
} as const
export type IngredientPreparation = typeof IngredientPreparation[keyof typeof IngredientPreparation] | ReturnType<typeof IngredientPreparation.Custom>

export type DirectionStep = {
	description: string,
	ingredients: Pick<MeasuredIngredient, "name" | "measure" | "preparation">[],
}

export type Directions = {
	steps: DirectionStep[],
}
