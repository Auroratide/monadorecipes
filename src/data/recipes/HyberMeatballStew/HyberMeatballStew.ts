import { IngredientPreparation, type Recipe } from "$lib/recipes/Recipe"
import { RecipeType, RecipeSource } from "$lib/recipes/Recipe"
import { MeasureUnit, MeasureAmount } from "$lib/recipes/Measure"
import * as Ingredients from "$data/ingredients"
import MainImg from "./HyberMeatballStew.png"

const recipe: Recipe = {
	id: "hyber-meatball-stew",
	name: "Hyber Meatball Stew",
	type: RecipeType.Veggie,
	source: RecipeSource.Aegaeon,
	timeInMinutes: 60,
	rarity: 2,
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
	gameIngredients: {
		"Feris Beastmeat": 2,
		"Sour Avocado": 1,
		"Barbed Tomato": 1,
		"Confusion Ivy": 1,
		"Lucky Lettuce": 2,
	},
	interpretation: "",
}

export default recipe
