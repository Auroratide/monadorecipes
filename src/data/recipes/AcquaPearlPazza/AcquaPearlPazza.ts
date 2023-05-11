import type { Recipe } from "$lib/recipes/Recipe"
import { IngredientPreparation } from "$lib/recipes/Recipe"
import { RecipeType, RecipeSource } from "$lib/recipes/Recipe"
import { MeasureUnit, MeasureAmountFraction } from "$lib/recipes/Measure"
import * as Ingredients from "$data/ingredients"
import MainImg from "./AcquaPearlPazza.webp?w=600;1600&format=webp;png&picture"

const recipe: Recipe = {
	id: "acqua-pearl-pazza",
	name: "Acqua Pearl Pazza",
	type: RecipeType.Seafood,
	source: RecipeSource.Pyra,
	timeInMinutes: 40,
	rarity: 3,
	image: {
		...MainImg,
		alt: "Acqua Pearl Pazza",
	},
	description: "Fish cooked in a spicy tomato-based soup with pearl-like olives.",
	ingredients: [ {
		...Ingredients.OliveOil,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.Garlic,
		preparation: IngredientPreparation.Sliced,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Cloves,
		},
	}, {
		...Ingredients.BokChoy,
		measure: {
			amount: MeasureAmountFraction(3, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.RedPepperFlakes,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Teaspoons,
		},
	}, {
		...Ingredients.Capers,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Tablespoons,
		},
	}, {
		...Ingredients.CherryTomatoes,
		preparation: IngredientPreparation.Halved,
		measure: {
			amount: MeasureAmountFraction(2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.WhiteWine,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Water,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.CastelvetranoOlives,
		measure: {
			amount: MeasureAmountFraction(1, 2),
			unit: MeasureUnit.Cups,
		},
	}, {
		...Ingredients.Salt,
	}, {
		...Ingredients.BlackPepper,
	}, {
		...Ingredients.Swai,
		preparation: IngredientPreparation.Custom("6-oz fillets"),
		measure: {
			amount: MeasureAmountFraction(4),
			unit: MeasureUnit.Quantity,
		},
	}, {
		...Ingredients.CrustyBread,
	} ],
	directions: {
		steps: [
			"Chop the bok choy, separating the stems from the leaves. Chop the stems into very thin slices. The leaves will be used later.",
			"Pour the olive oil in a pan under medium heat. Saute the garlic with the bok choy stems until the stems soften, about 3 minutes.",
			"Stir in the red pepper flakes, some salt and pepper, wine, and tomatoes and cook until the juice starts to come out of the tomatoes, about 3 minutes.",
			"Add water, capers, and olives. Cover and simmer for 5 miniutes.",
			"Season the fish with salt, then add to the pan nestled within the sauce. Cover and cook until the fish is opaque, about 10 minutes.",
			"Layer the bok choy leaves on the bottom of serving bowls. Place the fish on top of the leaves, then spoon the sauce over the fish.",
			"Serve with crusty bread and enjoy!",
		],
	},
	gameIngredients: {
		"Emblazoned Ray": 2,
		"Whisper Tomato": 2,
		"Spirit Clematis": 3,
		"Puri Leaf Cabbage": 3,
	},
	interpretation: `
		<p>Acqua Pazza is the name of a real fish recipe, Italian for "crazy water". Firm, white fish cooked with small, juicy tomatoes is a common theme among recipes, and this fits well with Pyra's use of Emblazoned Ray and Whisper Tomatoes.</p>
		<p>Where this recipe differs from most is in the use of Bok Choy cabbage instead of fennel, in order to represent the Puri Leaf Cabbage. Bok Choy's stem provides a similar texture, albeit with a milder flavor.</p>
		<p>We use red pepper flakes to represent the Spirit Clematis, as clematis plants may have been used in the past as a pepper substitute prior to the discovery of its toxicity. Finally, to emphasize the "Pearl" part of the dish's name, whole olives are used to give a pearl-like appearance.</p>
	`,
	references: [
		"https://www.ciaoitalia.com/recipes/acqua-pazza-2",
	]
}

export default recipe
