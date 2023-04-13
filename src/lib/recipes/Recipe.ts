import type { Ingredient } from "$lib/ingredients/Ingredient"
import type { Measure } from "$lib/recipes/Measure"

export const RecipeType = {
	Meat: "meat",
	Veggie: "veggie",
	Dessert: "dessert",
} as const
export type RecipeType = typeof RecipeType[keyof typeof RecipeType]

export type Recipe = {
	name: string,
	type: RecipeType,
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
