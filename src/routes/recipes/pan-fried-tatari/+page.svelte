<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemCell } from "$lib/design/ItemTable"
	import { RarityIndicator } from "$lib/recipes/RarityIndicator"
	import { PanFriedTatari } from "$lib/recipes/pan-fried-tatari"
</script>

<Page title="Pan-Fried Tatari">
	<TitledPanel title="Ingredients">
		<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={PanFriedTatari.ingredients}>
			<ItemCell>{item.name}</ItemCell>
			<ItemCell><RarityIndicator rarity={item.rarity} /></ItemCell>
			<ItemCell>{item.measure.amount} {item.measure.unit}</ItemCell>
		</ItemTable>
	</TitledPanel>
</Page>
