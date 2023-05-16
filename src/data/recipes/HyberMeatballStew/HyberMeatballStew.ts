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
	timeInMinutes: 70,
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
			amount: MeasureAmountFraction(3, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Onion,
		preparation: IngredientPreparation.Minced,
		measure: {
			amount: MeasureAmountFraction(1, 4),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.ItalianSeasoning,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.VegetableOil,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.CondensedTomatoSoup,
		preparation: IngredientPreparation.Custom("10¾ oz can"),
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Cans,
		},
	}, {
		...Ingredients.BeefBroth,
		preparation: IngredientPreparation.Custom("10½ oz can"),
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Cans,
		},
	}, {
		...Ingredients.WorchesishireSauce,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.Potatos,
		preparation: IngredientPreparation.Cubed,
		measure: {
			amount: MeasureAmountFraction(4),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Cabbage,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Onion,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmountFraction(3, 4),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Avocado,
		preparation: IngredientPreparation.Sliced,
		measure: {
			amount: MeasureAmountFraction(1),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Parsley,
		preparation: IngredientPreparation.Minced,
		measure: {
			amount: MeasureAmountFraction(1, 4),
			unit: MeasureUnit.Cups,
		},
	} ],
	directions: {
		steps: [
			"Chop the onion, potatoes, and cabbage into large chunks. Set aside.",
			"In a large mixing bowl, combine the bread crumbs, egg, italian seasoning, 1 tsp salt, and minced onion.",
			"Break apart the ground beef into the bowl, incorporating everything together. Form around 24 meatballs and set aside.",
			"In a large pot, heat the oil on medium heat. Brown the meatballs in the oil, turning them so every side is covered. Remove the meatballs when browned and drain leftover oil.",
			"In the large pot, mix together the tomato soup, beef broth, worchesishire sauce, potatoes, and onions. Season with salt and italian seasoning.",
			"Bring to a boil, then reduce heat and simmer for 35 minutes.",
			"After 35 minutes, add in the cabbage and simmer for another 10 minutes.",
			"While simmering, cut the avocados into thin slices and chop up the parsley for garnish.",
			"Remove the stew from heat. Garnish the top of the stew with the avocado slices and chopped parsley."
		],
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
