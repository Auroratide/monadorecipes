<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemCell } from "$lib/design/ItemTable"
	import { RarityIndicator } from "$lib/ingredients/RarityIndicator"
	import { FriedTartariALaJin } from "$lib/recipes/FriedTartariALaJin"
</script>

<Page title="{FriedTartariALaJin.name}">
	<TitledPanel title="Ingredients">
		<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={FriedTartariALaJin.ingredients}>
			<ItemCell>{item.name}</ItemCell>
			<ItemCell><RarityIndicator rarity={item.rarity} /></ItemCell>
			<ItemCell>{item.measure?.amount} {item.measure?.unit}</ItemCell>
		</ItemTable>
	</TitledPanel>
</Page>
