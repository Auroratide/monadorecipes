<script lang="ts">
	import type { Rarity } from "$lib/recipes/Recipe"

	export let rarity: Rarity

	$: label = `Rarity ${rarity}`
	
	const colors = [
		["#5e9bbc", "#313d77"],
		["#f267bc", "#ef6b7b"],
		["#f8d08a", "#ef717c"],
	]

	$: backgroundTop = colors[rarity - 1][0]
	$: backgroundBottom = colors[rarity - 1][1]
</script>

<span class="max-rarity-width centered isolated" role="img" aria-label={label} title={label} style:--background-top={backgroundTop} style:--background-bottom={backgroundBottom}>
	<span class="diamond top"></span>
	{#if rarity > 1}
		<span class="diamond overlap-left middle"></span>
	{/if}
	{#if rarity > 2}
		<span class="diamond overlap-left bottom"></span>
	{/if}
</span>

<style>
	.max-rarity-width {
		display: inline-block;
		width: 1.667em;
	}

	.centered { text-align: center; }

	.isolated { isolation: isolate; }

	.diamond {
		display: inline-block;
		width: 0.7071em; /* 1 / sqrt(2) */
		height: 0.7071em;
		border: 0.0625em solid white;
		background: linear-gradient(135deg, var(--background-top), var(--background-bottom));
		transform: rotate(45deg);
		aspect-ratio: 1;
	}

	.overlap-left {
		margin-left: -0.667em;
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
