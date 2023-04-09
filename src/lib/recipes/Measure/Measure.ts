export const MeasureUnit = {
	Teaspoons: 'teaspoons',
	Tablespoons: 'tablespoons',
	Cups: 'cups',
	Pounds: 'pounds',
	Quantity: 'quantity',
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


export const MeasureAmount = (numerator: number, denominator = 1) => ({
	numerator,
	denominator,
})
export type MeasureAmount = ReturnType<typeof MeasureAmount>
export const measureToNumber = (amount: MeasureAmount): number =>
	amount.numerator / amount.denominator

export type Measure = {
	amount: MeasureAmount,
	unit: MeasureUnit,
}
