import type { Ingredient } from "$lib/ingredients/Ingredient"
import type { Rarity } from "$lib/rarity/Rarity"
import type { Measure } from "$lib/recipes/Measure"

export const RecipeType = {
	Meat: "meat",
	Veggie: "veggie",
	Dessert: "dessert",
} as const
export type RecipeType = typeof RecipeType[keyof typeof RecipeType]

export const RecipeSource = {
	Aegaeon: "Aegaeon's Refined Cuisine",
	Crossette: "Crossette's Cooking",
	Jin: "Jin's Home Cooking",
	Gorg: "Just Desserts",
	Mythra: "Mythra's \"Creative\" Cuisine",
	Pyra: "Pyra's Cooking",
} as const
export type RecipeSource = typeof RecipeSource[keyof typeof RecipeSource]

export type Recipe = {
	id: string,
	name: string,
	type: RecipeType,
	source: RecipeSource,
	rarity: Rarity,
	timeInMinutes: number,
	image: {
		src: string,
		alt: string,
	},
	description: string,
	ingredients: MeasuredIngredient[],
	directions: Directions,
}

export type MeasuredIngredient = Ingredient & {
	preparation?: IngredientPreparation,
	measure?: Measure,
}

export const IngredientPreparation = {
	Chopped: 'chopped',
} as const
export type IngredientPreparation = typeof IngredientPreparation[keyof typeof IngredientPreparation]

export type Directions = {
	steps: string[],
}
