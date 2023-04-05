export type Recipe = {
	ingredients: MeasuredIngredient[],
}

export type Rarity = 1 | 2 | 3

export type Ingredient = {
	name: string,
	rarity: Rarity,
}

export type MeasuredIngredient = Ingredient & {
	measure: Measure,
}

export type Measure = {
	amount: number,
	unit: string,
}
