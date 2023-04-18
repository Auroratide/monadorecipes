import { IngredientPreparation, type Recipe } from "$lib/recipes/Recipe"
import { RecipeType, RecipeSource } from "$lib/recipes/Recipe"
import { MeasureUnit, MeasureAmountFraction, MeasureAmountDecimal } from "$lib/recipes/Measure"
import * as Ingredients from "$data/ingredients"
import MainImg from "./WhiteHotEggyCurry.png?w=600;1600&format=webp;png&picture"

const recipe: Recipe = {
	id: "white-hot-eggy-curry",
	name: "White-Hot Eggy Curry",
	type: RecipeType.Staple,
	source: RecipeSource.Crossette,
	timeInMinutes: 80,
	rarity: 2,
	image: {
		...MainImg,
		alt: "White-Hot Eggy Curry",
	},
	description: "A very spicy Japanese-style curry that uses eggs and mushrooms in place of meat.",
	ingredients: [ {
		...Ingredients.Rice,
	}, {
		...Ingredients.Potatos,
		preparation: IngredientPreparation.Cubed,
		measure: {
			amount: MeasureAmountFraction(3),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Carrots,
		preparation: IngredientPreparation.Cubed,
		measure: {
			amount: MeasureAmountFraction(4),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Onion,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmountFraction(1),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.PortobelloMushrooms,
		preparation: IngredientPreparation.Sliced,
		measure: {
			amount: MeasureAmountFraction(8),
			unit: MeasureUnit.Ounces,
		},
	}, {
		...Ingredients.Eggs,
		measure: {
			amount: MeasureAmountFraction(6),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Ketchup,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.GoldenCurryMix,
		measure: {
			amount: MeasureAmountDecimal(3.2),
			unit: MeasureUnit.Ounces,
		},
	}, {
		...Ingredients.Cayenne,
	}, {
		...Ingredients.Salt,
	} ],
	directions: {
		steps: [],
	},
	gameIngredients: {
		"Acid Tomato": 2,
		"Death Mushroom": 1,
		"Meaty Carrot": 1,
		"Gromrice": 1,
		"Glitterspud": 2,
	},
	interpretation: "",
}

export default recipe
