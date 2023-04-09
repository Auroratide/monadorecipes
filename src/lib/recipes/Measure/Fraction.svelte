<script lang="ts">
	export let numerator: number;
	export let denominator: number;

	$: n = numerator
	$: d = denominator

	let unicode = ""
	$: {
		if (n === 1 && d === 2) unicode = "½"
		else if (n === 1 && d === 3) unicode = "⅓"
		else if (n === 2 && d === 3) unicode = "⅔"
		else if (n === 1 && d === 4) unicode = "¼"
		else if (n === 3 && d === 4) unicode = "¾"
		else if (n === 1 && d === 5) unicode = "⅕"
		else if (n === 2 && d === 5) unicode = "⅖"
		else if (n === 3 && d === 5) unicode = "⅗"
		else if (n === 4 && d === 5) unicode = "⅘"
		else if (n === 1 && d === 6) unicode = "⅙"
		else if (n === 5 && d === 6) unicode = "⅚"
		else if (n === 1 && d === 7) unicode = "⅐"
		else if (n === 1 && d === 8) unicode = "⅛"
		else if (n === 3 && d === 8) unicode = "⅜"
		else if (n === 5 && d === 8) unicode = "⅝"
		else if (n === 7 && d === 8) unicode = "⅞"
		else if (n === 1 && d === 9) unicode = "⅑"
		else if (n === 1 && d === 10) unicode = "⅒"
		else unicode = ""
	}
</script>

{#if unicode !== ""}
	<span>{unicode}</span>
{:else}
	<span>{n}/{d}</span>
{/if}
