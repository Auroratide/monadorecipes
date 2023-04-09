<script lang="ts">
	import type { Measure } from "./Measure";
	import { MeasureUnit, pluralizedMeasureUnit } from "./Measure";
	import Fraction from "./Fraction.svelte";

	export let value: Measure;

	$: wholePart = Math.floor(value.amount.numerator / value.amount.denominator);
	$: fractionPart = value.amount.numerator % value.amount.denominator;
</script>

<span>
	{#if wholePart > 0}<span>{wholePart}</span>{/if}{#if fractionPart > 0}<Fraction numerator={fractionPart} denominator={value.amount.denominator} />{/if}
	{#if value.unit !== MeasureUnit.Quantity}
		<span>{pluralizedMeasureUnit(value.unit, value.amount)}</span>
	{/if}
</span>
