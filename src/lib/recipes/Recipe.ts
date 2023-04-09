import type { Ingredient } from "$lib/ingredients/Ingredient"

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

export const MeasureUnit = {
	Teaspoons: 'teaspoons',
	Tablespoons: 'tablespoons',
	Cups: 'cups',
	Pounds: 'pounds',
	Quantity: 'quantity',
} as const
export type MeasureUnit = typeof MeasureUnit[keyof typeof MeasureUnit]

export type Measure = {
	amount: number,
	unit: MeasureUnit,
}

export const IngredientPreparation = {
	Chopped: 'chopped',
} as const
export type IngredientPreparation = typeof IngredientPreparation[keyof typeof IngredientPreparation]
