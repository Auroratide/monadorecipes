import type { Recipe } from "$lib/recipes/Recipe"
import { RecipeType, RecipeSource } from "$lib/recipes/Recipe"
import { MeasureUnit, MeasureAmount } from "$lib/recipes/Measure"
import * as Ingredients from "$data/ingredients"
import MainImg from "./FriedTartariALaJin.png"

const recipe: Recipe = {
	id: "fried-tartari-a-la-jin",
	name: "Fried Tartari à la Jin",
	type: RecipeType.Meat,
	source: RecipeSource.Jin,
	timeInMinutes: 30,
	rarity: 3,
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
	gameIngredients: {
		"Buloofo Beastmeat": 2,
		"Rhogul Birdmeat": 2,
		"Weeping Flour": 1,
		"Nest Extract": 1,
		"Barbed Tomato": 2,
	},
	interpretation: "",
}

export default recipe
