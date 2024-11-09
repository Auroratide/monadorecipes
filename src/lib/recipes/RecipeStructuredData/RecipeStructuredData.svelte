<script lang="ts">
	import type { Recipe } from "../Recipe"
	import { structuredRecipe } from "./structuredRecipe"
	import { LdJson } from "./LdJson"

	export let value: Recipe
</script>

<svelte:head>
	{@html LdJson.stringify(structuredRecipe(value))}
</svelte:head>
