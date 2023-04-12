import type { Recipe } from "../Recipe"
import { RecipeType, IngredientPreparation } from "../Recipe"
import { MeasureUnit, MeasureAmount } from "../Measure"
import * as Ingredients from "$lib/ingredients/ingredients"
import WingberryCakeImg from "./wingberry-cake.png"

// ref: https://www.allrecipes.com/recipe/26016/cranberry-upside-down-coffee-cake/
export const WingberryCake: Recipe = {
	name: "Wingberry Cake",
	type: RecipeType.Dessert,
	image: {
		src: WingberryCakeImg,
		alt: "Wingberry Cake",
	},
	description: "A delicious cranberry cake.",
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
}
