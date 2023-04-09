import type { Ingredient } from "$lib/ingredients/Ingredient"
import type { Measure } from "$lib/recipes/Measure"

export const RecipeType = {
	Meat: "meat",
	Dessert: "dessert",
} as const
export type RecipeType = typeof RecipeType[keyof typeof RecipeType]

export type Recipe = {
	name: string,
	type: RecipeType,
	ingredients: MeasuredIngredient[],
}

export type MeasuredIngredient = Ingredient & {
	preparation?: IngredientPreparation,
	measure?: Measure,
}

export const IngredientPreparation = {
	Chopped: 'chopped',
} as const
export type IngredientPreparation = typeof IngredientPreparation[keyof typeof IngredientPreparation]
