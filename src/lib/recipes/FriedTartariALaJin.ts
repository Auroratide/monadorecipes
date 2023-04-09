import type { Recipe } from "./Recipe"
import { RecipeType } from "./Recipe"
import { MeasureUnit, MeasureAmount } from "./Measure"
import * as Ingredients from "$lib/ingredients/ingredients"

export const FriedTartariALaJin: Recipe = {
	name: "Fried Tatari à la Jin",
	type: RecipeType.Meat,
	ingredients: [ {
		...Ingredients.ChickenBreast,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Beef,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Flour,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Oregano,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Paprika,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Cumin,
		measure: {
			amount: MeasureAmount(1),
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
