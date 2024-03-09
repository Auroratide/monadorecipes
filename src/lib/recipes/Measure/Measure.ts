export const MeasureUnit = {
	Teaspoons: 'teaspoons',
	Tablespoons: 'tablespoons',
	Cups: 'cups',
	Pounds: 'pounds',
	Ounces: 'ounces',
	Quantity: 'quantity',
	Cloves: 'cloves',
	Cans: 'cans',
} as const
export type MeasureUnit = typeof MeasureUnit[keyof typeof MeasureUnit]
export const pluralizedMeasureUnit = (unit: MeasureUnit, amount: MeasureAmount): string => {
	if (unit === MeasureUnit.Quantity) {
		return unit
	} else if (measureToNumber(amount) <= 1) {
		return unit.substring(0, unit.length - 1)
	} else {
		return unit
	}
}
export const asPlural = (singular: string): MeasureUnit => {
	switch (singular) {
		case "teaspoon": return MeasureUnit.Teaspoons
		case "tablespoon": return MeasureUnit.Tablespoons
		case "cup": return MeasureUnit.Cups
		case "pound": return MeasureUnit.Pounds
		case "ounce": return MeasureUnit.Ounces
		case "quantity": return MeasureUnit.Quantity
		case "clove": return MeasureUnit.Cloves
		case "can": return MeasureUnit.Cans
		default: return singular as MeasureUnit
	}
}

export const MeasureAmountFraction = (numerator: number, denominator = 1) => ({
	numerator,
	denominator,
})
export type MeasureAmountFraction = ReturnType<typeof MeasureAmountFraction>

export const MeasureAmountDecimal = (decimal: number) => ({
	decimal,
})
export type MeasureAmountDecimal = ReturnType<typeof MeasureAmountDecimal>

export type MeasureAmount = MeasureAmountFraction | MeasureAmountDecimal

export const isDecimal = (amount: MeasureAmount): amount is MeasureAmountDecimal =>
	"decimal" in amount

export const measureToNumber = (amount: MeasureAmount): number => {
	if (isDecimal(amount)) {
		return amount.decimal
	} else {
		return amount.numerator / amount.denominator
	}
}

export type Measure = {
	amount: MeasureAmount,
	unit: MeasureUnit,
}
