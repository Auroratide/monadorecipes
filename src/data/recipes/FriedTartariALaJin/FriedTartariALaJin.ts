import { IngredientPreparation, type Recipe } from "$lib/recipes/Recipe"
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
		preparation: IngredientPreparation.Cubed,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Pounds,
		},
	}, {
		...Ingredients.Beef,
		preparation: IngredientPreparation.Cubed,
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
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.TomatoPaste,
		measure: {
			amount: MeasureAmount(2),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.Honey,
		measure: {
			amount: MeasureAmount(1),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.Rice,
	} ],
	directions: {
		steps: [
			"Mix the flour, oregano, paprika, cumin, salt, and pepper in a bowl. Coat the chicken and beef with this mixture.",
			"Heat the oil in a pan over medium-high heat. Pan-fry the chicken and beef until golden brown. It is best to fry each meat separately since they cook at different rates. Chicken takes about 5 to 6 minutes on one side and 2 minutes on the other, while beef takes about 4 minutes on one side and 1 minute on the other.",
			"Remove the meat and set them aside, but keep the remaining oil in the pan.",
			"Add the tomato paste to the pan and mix with the oil over medium heat. Gradiually stir in the honey.",
			"After about 1 minute, add in all the meat to the pan and stir until the meat is coated. Sprinkle some oregano for garnish.",
			"Serve with rice!",
		],
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
