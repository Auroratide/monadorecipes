<script lang="ts">
	import type { Rarity } from "../Ingredient"
	import { Color } from "$lib/design/Color"

	export let rarity: Rarity

	$: label = `Rarity ${rarity}`

	const colors = [
		Color.valueOf(Color.icon.common()),
		Color.valueOf(Color.icon.uncommon()),
		Color.valueOf(Color.icon.rare()),
	]

	$: background = colors[rarity - 1]
</script>

<span class="max-rarity-width centered isolated" role="img" aria-label={label} title={label} style:--icon-bg={background}>
	<span class="diamond top {Color.border.regular()}"></span>
	{#if rarity > 1}
		<span class="diamond overlap-left middle {Color.border.regular()}"></span>
	{/if}
	{#if rarity > 2}
		<span class="diamond overlap-left bottom {Color.border.regular()}"></span>
	{/if}
</span>

<style>
	.max-rarity-width {
		display: inline-flex;
		width: 1.667em;
	}

	.centered {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.isolated { isolation: isolate; }

	.diamond {
		display: inline-block;
		width: 0.7071em; /* 1 / sqrt(2) */
		height: 0.7071em;
		border: 0.0625em solid;
		background: var(--icon-bg);
		transform: rotate(45deg);
		aspect-ratio: 1;
	}

	.overlap-left {
		margin-left: -0.4em;
	}

	.top {
		position: relative;
		z-index: 3;
	}

	.middle {
		position: relative;
		z-index: 2;
	}

	.bottom {
		position: relative;
		z-index: 1;
	}
</style>
