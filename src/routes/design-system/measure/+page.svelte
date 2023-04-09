<script lang="ts">
	import { RarityIndicator } from "$lib/ingredients/RarityIndicator"
	import { MeasureAmount, MeasureUnit, FormattedMeasure } from "$lib/recipes/Measure"

	const wholeOnly = { amount: MeasureAmount(2), unit: MeasureUnit.Cups }
	const fractionOnly = { amount: MeasureAmount(1, 2), unit: MeasureUnit.Tablespoons }
	const wholeAndFraction = { amount: MeasureAmount(5, 4), unit: MeasureUnit.Cups }
	const singular = { amount: MeasureAmount(1), unit: MeasureUnit.Teaspoons }
	const plural = { amount: MeasureAmount(2), unit: MeasureUnit.Teaspoons }
	const quantity = { amount: MeasureAmount(4), unit: MeasureUnit.Quantity }
</script>

<ul>
	<li><FormattedMeasure value={wholeOnly} /></li>
	<li><FormattedMeasure value={fractionOnly} /></li>
	<li><FormattedMeasure value={wholeAndFraction} /></li>
	<li><FormattedMeasure value={singular} /></li>
	<li><FormattedMeasure value={plural} /></li>
	<li><FormattedMeasure value={quantity} /></li>
</ul>
