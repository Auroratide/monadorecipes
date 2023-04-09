import type { Recipe } from "./Recipe"
import { RecipeType, MeasureUnit } from "./Recipe"
import * as Ingredients from "$lib/ingredients/ingredients"

export const FriedTartariALaJin: Recipe = {
	name: "Fried Tatari à la Jin",
	type: RecipeType.Meat,
	ingredients: [ {
		...Ingredients.ChickenBreast,
		measure: {
			amount: 1,
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Beef,
		measure: {
			amount: 1,
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Flour,
		measure: {
			amount: 1,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Oregano,
		measure: {
			amount: 1,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Paprika,
		measure: {
			amount: 1,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Cumin,
		measure: {
			amount: 1,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Salt,
	}, {
		...Ingredients.BlackPepper,
	}, {
		...Ingredients.VegetableOil,
	} ]
}
