import type { Recipe } from "../../../lib/recipes/Recipe"
import { RecipeType } from "../../../lib/recipes/Recipe"
import { MeasureUnit, MeasureAmount } from "../../../lib/recipes/Measure"
import * as Ingredients from "$lib/ingredients/ingredients"
import MainImg from "./FriedTartariALaJin.png"

export const FriedTartariALaJin: Recipe = {
	id: "fried-tartari-a-la-jin",
	name: "Fried Tartari à la Jin",
	type: RecipeType.Meat,
	image: {
		src: MainImg,
		alt: "Fried Tartari à la Jin",
	},
	description: "A delicious fried meat dish.",
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
	} ],
	directions: {
		steps: [],
	},
}
