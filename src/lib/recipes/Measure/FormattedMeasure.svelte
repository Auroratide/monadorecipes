<script lang="ts">
	import type { Measure } from "./Measure";
	import { MeasureUnit, pluralizedMeasureUnit, isDecimal } from "./Measure";
	import Fraction from "./Fraction.svelte";

	export let value: Measure;

	let wholePart: number;
	let fractionPart: number;
	let denominator: number;

	$: {
		if (isDecimal(value.amount)) {
			wholePart = value.amount.decimal;
			fractionPart = 0;
			denominator = 1;
		} else {
			wholePart = Math.floor(value.amount.numerator / value.amount.denominator);
			fractionPart = value.amount.numerator % value.amount.denominator;
			denominator = value.amount.denominator;
		}
	}
</script>

<span>
	{#if wholePart > 0}<span>{wholePart}</span>{/if}{#if fractionPart > 0}<Fraction numerator={fractionPart} denominator={denominator} />{/if}
	{#if value.unit !== MeasureUnit.Quantity}
		<span>{pluralizedMeasureUnit(value.unit, value.amount)}</span>
	{/if}
</span>
