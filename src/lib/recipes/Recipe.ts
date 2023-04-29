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
} as const
export type RecipeSource = typeof RecipeSource[keyof typeof RecipeSource]

export type Recipe = {
	id: string,
	name: string,
	unlisted?: boolean,
	type: RecipeType,
	source: RecipeSource,
	rarity: Rarity,
	timeInMinutes: number,
	image: Image & WithAlt,
	description: string,
	ingredients: MeasuredIngredient[],
	directions: Directions,
	gameIngredients: Record<string, number>,
	interpretation: RichText,
}

export type MeasuredIngredient = Ingredient & {
	preparation?: IngredientPreparation,
	measure?: Measure,
}

export const IngredientPreparation = {
	Chopped: "chopped",
	Cubed: "cubed",
	Minced: "minced",
	Sliced: "sliced",
} as const
export type IngredientPreparation = typeof IngredientPreparation[keyof typeof IngredientPreparation]

export type Directions = {
	steps: string[],
}
