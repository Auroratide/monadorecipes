<script lang="ts">
	import { RecipeType } from "../Recipe";
	import DessertIcon from "$lib/design/icons/DessertIcon.svelte";
	import MeatIcon from "$lib/design/icons/MeatIcon.svelte";
	import SeafoodIcon from "$lib/design/icons/SeafoodIcon.svelte";
	import StapleIcon from "$lib/design/icons/StapleIcon.svelte";
	import VeggieIcon from "$lib/design/icons/VeggieIcon.svelte";

	export let type: RecipeType;
</script>

{#if type === RecipeType.Dessert}
	<DessertIcon />
{:else if type === RecipeType.Meat}
	<MeatIcon />
{:else if type === RecipeType.Seafood}
	<SeafoodIcon />
{:else if type === RecipeType.Staple}
	<StapleIcon />
{:else if type === RecipeType.Veggie}
	<VeggieIcon />
{/if}
