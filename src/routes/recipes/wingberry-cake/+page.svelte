<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemCell } from "$lib/design/ItemTable"
	import { RarityIndicator } from "$lib/ingredients/RarityIndicator"
	import { FormattedMeasure } from "$lib/recipes/Measure"
	import { RecipeSteps } from "$lib/recipes/RecipeSteps"
	import { WingberryCake } from "$lib/recipes/WingberryCake"
</script>

<Page title="{WingberryCake.name}">
	<TitledPanel title="Ingredients">
		<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={WingberryCake.ingredients}>
			<ItemCell>{item.name}</ItemCell>
			<ItemCell><RarityIndicator rarity={item.rarity} /></ItemCell>
			<ItemCell>
				{#if item.measure}
					<FormattedMeasure value={item.measure} />
				{:else}
					<span>—</span>
				{/if}
			</ItemCell>
		</ItemTable>
	</TitledPanel>
	<TitledPanel title="Directions">
		<RecipeSteps steps={WingberryCake.directions.steps} />
	</TitledPanel>
</Page>
