import { IngredientPreparation, type Recipe } from "$lib/recipes/Recipe"
import { RecipeType, RecipeSource } from "$lib/recipes/Recipe"
import { MeasureUnit, MeasureAmountFraction } from "$lib/recipes/Measure"
import * as Ingredients from "$data/ingredients"
import MainImg from "./HyberMeatballStew.png?w=600;1600&format=webp;png&picture"

const recipe: Recipe = {
	id: "hyber-meatball-stew",
	name: "Hyber Meatball Stew",
	type: RecipeType.Veggie,
	source: RecipeSource.Aegaeon,
	timeInMinutes: 60,
	rarity: 2,
	image: {
		...MainImg,
		alt: "Hyber Meatball Stew",
	},
	description: "Stew with meatballs.",
	ingredients: [ {
		...Ingredients.GroundBeef,
		measure: {
			amount: MeasureAmountFraction(3, 2),
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Eggs,
		measure: {
			amount: MeasureAmountFraction(1),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.BreadCrumbs,
		measure: {
			amount: MeasureAmountFraction(1),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Onion,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmountFraction(1, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.ItalianSeasoning,
		measure: {
			amount: MeasureAmountFraction(1, 2),
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
