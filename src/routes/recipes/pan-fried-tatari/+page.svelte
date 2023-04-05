<script lang="ts">
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemRow } from "$lib/design/ItemTable"
	import { PanFriedTatari } from "$lib/recipes/pan-fried-tatari"
</script>

<svelte:head>
	<title>Monado Recipes: Pan-Fried Tatari</title>
</svelte:head>

<h1>Pan-Fried Tatari</h1>
<TitledPanel title="Ingredients">
	<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={[
		["Tatari", "Common", 1],
		["Flour", "Common", 1],
		["Egg", "Common", 1],
		["Oil", "Common", 1],
		["Salt", "Common", 1],
		["Pepper", "Common", 1],
		["Butter", "Common", 1],
		["Lemon", "Common", 1],
		["Parsley", "Common", 1],
	]}>
		<ItemRow></ItemRow>
	</ItemTable>
</TitledPanel>
