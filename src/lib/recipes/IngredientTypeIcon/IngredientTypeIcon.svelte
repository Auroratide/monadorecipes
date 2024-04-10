<script lang="ts">
	import { IngredientType } from "../Ingredient"
	import VegetableIcon from "$lib/design/icons/VegetableIcon.svelte"
	import SteakIcon from "$lib/design/icons/SteakIcon.svelte"
	import FishIcon from "$lib/design/icons/FishIcon.svelte"
	import StapleIcon from "$lib/design/icons/StapleIcon.svelte"
	import FlowerIcon from "$lib/design/icons/FlowerIcon.svelte"

	export let type: IngredientType
</script>

{#if type === IngredientType.Vegetable}
	<VegetableIcon />
{:else if type === IngredientType.Meat}
	<SteakIcon />
{:else if type === IngredientType.Fish}
	<FishIcon />
{:else if type === IngredientType.Fruit}
	<VegetableIcon />
{:else if type === IngredientType.Nut}
	<VegetableIcon />
{:else if type === IngredientType.Grain}
	<StapleIcon />
{:else if type === IngredientType.Dairy}
	<FlowerIcon />
{:else if type === IngredientType.Spice}
	<FlowerIcon />
{:else if type === IngredientType.Oil}
	<FlowerIcon />
{:else if type === IngredientType.Liquid}
	<FlowerIcon />
{/if}
