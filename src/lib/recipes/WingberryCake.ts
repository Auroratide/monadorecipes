import type { Recipe } from "./Recipe"
import { RecipeType, MeasureUnit, IngredientPreparation } from "./Recipe"
import * as Ingredients from "$lib/ingredients/ingredients"

// ref: https://www.allrecipes.com/recipe/26016/cranberry-upside-down-coffee-cake/
export const WingberryCake: Recipe = {
	name: "Wingberry Cake",
	type: RecipeType.Dessert,
	ingredients: [ {
		...Ingredients.BrownSugar,
		measure: {
			amount: 2 / 3,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Butter,
		measure: {
			amount: 1 / 3,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Cranberries,
		measure: {
			amount: 1 + 1 / 4,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Almonds,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: 1 / 2,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Butter,
		measure: {
			amount: 1 / 2,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.WhiteSugar,
		measure: {
			amount: 3 / 4,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Eggs,
		measure: {
			amount: 2,
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Honey,
		measure: {
			amount: 3,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.SourCream,
		measure: {
			amount: 1,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Flour,
		measure: {
			amount: 1 + 1 / 2,
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.BakingPowder,
		measure: {
			amount: 1 + 1 / 2,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.BakingSoda,
		measure: {
			amount: 1,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Nutmeg,
		measure: {
			amount: 1 / 2,
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Salt,
		measure: {
			amount: 1 / 4,
			unit: MeasureUnit.Teaspoons,
		},
	} ]
}
