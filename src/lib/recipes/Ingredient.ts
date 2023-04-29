import type { Rarity } from "$lib/rarity/Rarity"

export const IngredientType = {
	Meat: "Meat",
	Fish: "Fish",
	Vegetable: "Vegetable",
	Fruit: "Fruit",
	Nut: "Nut",
	Grain: "Grain",
	Dairy: "Dairy",
	Spice: "Spice",
	Oil: "Oil",
	Liquid: "Liquid",
}
export type IngredientType = typeof IngredientType[keyof typeof IngredientType]

export type Ingredient = {
	name: string,
	type: IngredientType,
	rarity: Rarity,
}
