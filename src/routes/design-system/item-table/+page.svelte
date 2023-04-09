<script lang="ts">
	import { ItemTable, ItemCell } from "$lib/design/ItemTable"
	import { RarityIndicator } from "$lib/ingredients/RarityIndicator";

	const items = [ {
		name: "Plumage Peach",
		rarity: 1,
		owned: 12,
		needed: 2,
	} ,{
		name: "Sumpkin",
		rarity: 2,
		owned: 5,
		needed: 1,
	}, {
		name: "Dawn Hydrangea",
		rarity: 3,
		owned: 0,
		needed: 1,
	}, ]
</script>

<ItemTable let:item headings={["Name", "Rarity", "Owned", "Needed"]} {items}>
	<ItemCell>{item.name}</ItemCell>
	<ItemCell><RarityIndicator rarity={item.rarity} /></ItemCell>
	<ItemCell>{item.owned}</ItemCell>
	<ItemCell>{item.needed}</ItemCell>
</ItemTable>
