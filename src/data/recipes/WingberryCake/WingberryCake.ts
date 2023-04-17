import type { Recipe } from "$lib/recipes/Recipe"
import { RecipeType, IngredientPreparation, RecipeSource } from "$lib/recipes/Recipe"
import { MeasureUnit, MeasureAmountFraction } from "$lib/recipes/Measure"
import * as Ingredients from "$data/ingredients"
import MainImage from "./WingberryCake.png"

// ref: https://www.allrecipes.com/recipe/26016/cranberry-upside-down-coffee-cake/
const recipe: Recipe = {
	id: "wingberry-cake",
	name: "Wingberry Cake",
	type: RecipeType.Dessert,
	source: RecipeSource.Jin,
	timeInMinutes: 90,
	rarity: 3,
	image: {
		src: MainImage,
		alt: "Wingberry Cake",
	},
	description: "A cranberry and almond upside-down coffee cake made with honey instead of vanilla.",
	ingredients: [ {
		...Ingredients.BrownSugar,
		measure: {
			amount: MeasureAmountFraction(2, 3),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Butter,
		measure: {
			amount: MeasureAmountFraction(1, 3),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Cranberries,
		measure: {
			amount: MeasureAmountFraction(5, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Almonds,
		preparation: IngredientPreparation.Chopped,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Butter,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.WhiteSugar,
		measure: {
			amount: MeasureAmountFraction(3, 4),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Eggs,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.Honey,
		measure: {
			amount: MeasureAmountFraction(3),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.SourCream,
		measure: {
			amount: MeasureAmountFraction(1),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Flour,
		measure: {
			amount: MeasureAmountFraction(3, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.BakingPowder,
		measure: {
			amount: MeasureAmountFraction(3, 2),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.BakingSoda,
		measure: {
			amount: MeasureAmountFraction(1),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Nutmeg,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Salt,
		measure: {
			amount: MeasureAmountFraction(1, 4),
			unit: MeasureUnit.Teaspoons,
		},
	} ],
	directions: {
		steps: [
			"Preheat oven to 350°F (175°C). Grease a 9×9-inch baking pan.",
			"Sift together the flour, baking powder, baking soda, nutmeg, and salt. Set aside.",
			"In a saucepan over medium heat, combine brown sugar and the ⅓ cup of butter. Bring to a boil, then pour into the bottom of the baking pan.",
			"Sprinkle the cranberries and almonds over the brown sugar mixture.",
			"In a large bowl, cream together the remaining ½ cup of butter and the white sugar until light and fluffy. Beat in the eggs one at a time, then stir in the honey. Beat in the flour mixture alternately with the sour cream. Spread the batter over the cranberries and almonds.",
			"Bake for 60 minutes, or until an inserted toothpick comes out clean.",
			"Cool in the pan for 15 minutes, then invert onto a serving plate. Enjoy!",
		],
	},
	gameIngredients: {
		"Cranberry Bell": 2,
		"Ruska Flour": 2,
		"Weeping Flour": 2,
		"Melosian Honey": 1,
		"Lactonut": 1,
	},
	interpretation: `
		<p>Jin's Wingberry Cake is, as its name implies, a cake that gets its flavor from berries and its crunch from nuts. Due to the large amounts of flour in the recipe, we interpret this as a kind of upside-down coffee cake.</p>
		<p>Cranberry Bells imply that cranberries are the fruit of choice. As for the nut, we chose almonds since almonds sometimes used as a milk alternative; in other words, a "Lactonut" is a milky nut.</p>
		<p>Finally, many coffee cake recipes ask for either vanilla extract or cinnamon. For this recipe, we substitute those with honey since Jin's recipe calls for Melosian Honey.</p>
	`,
}

export default recipe
