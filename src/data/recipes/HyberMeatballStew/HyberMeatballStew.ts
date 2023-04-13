import { IngredientPreparation, type Recipe } from "../../../lib/recipes/Recipe"
import { RecipeType } from "../../../lib/recipes/Recipe"
import { MeasureUnit, MeasureAmount } from "../../../lib/recipes/Measure"
import * as Ingredients from "$lib/ingredients/ingredients"
import MainImg from "./HyberMeatballStew.png"

export const HyberMeatballStew: Recipe = {
	id: "hyber-meatball-stew",
	name: "Hyber Meatball Stew",
	type: RecipeType.Veggie,
	image: {
		src: MainImg,
		alt: "Hyber Meatball Stew",
	},
	description: "Stew with meatballs.",
	ingredients: [ {
		...Ingredients.GroundBeef,
		measure: {
			amount: MeasureAmount(3, 2),
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Eggs,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.BreadCrumbs,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Onion,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmount(1, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.ItalianSeasoning,
		measure: {
			amount: MeasureAmount(1, 2),
			unit: MeasureUnit.Teaspoons,
		},
	} ],
	directions: {
		steps: [],
	},
}