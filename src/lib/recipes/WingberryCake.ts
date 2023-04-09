import type { Recipe } from "./Recipe"
import { RecipeType, IngredientPreparation } from "./Recipe"
import { MeasureUnit, MeasureAmount } from "./Measure"
import * as Ingredients from "$lib/ingredients/ingredients"

// ref: https://www.allrecipes.com/recipe/26016/cranberry-upside-down-coffee-cake/
export const WingberryCake: Recipe = {
	name: "Wingberry Cake",
	type: RecipeType.Dessert,
	ingredients: [ {
		...Ingredients.BrownSugar,
		measure: {
			amount: MeasureAmount(2, 3),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Butter,
		measure: {
			amount: MeasureAmount(1, 3),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Cranberries,
		measure: {
			amount: MeasureAmount(5, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Almonds,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmount(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Butter,
		measure: {
			amount: MeasureAmount(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.WhiteSugar,
		measure: {
			amount: MeasureAmount(3, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Eggs,
		measure: {
			amount: MeasureAmount(2),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Honey,
		measure: {
			amount: MeasureAmount(3),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.SourCream,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Flour,
		measure: {
			amount: MeasureAmount(3, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.BakingPowder,
		measure: {
			amount: MeasureAmount(3, 2),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.BakingSoda,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Nutmeg,
		measure: {
			amount: MeasureAmount(1, 2),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Salt,
		measure: {
			amount: MeasureAmount(1, 4),
			unit: MeasureUnit.Teaspoons,
		},
	} ]
}
