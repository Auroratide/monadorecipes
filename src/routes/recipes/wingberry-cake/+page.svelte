<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { Color } from "$lib/design/Color"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemCell } from "$lib/design/ItemTable"
	import { QuestPanel } from "$lib/design/QuestPanel"
	import { RarityIndicator } from "$lib/ingredients/RarityIndicator"
	import { FormattedMeasure } from "$lib/recipes/Measure"
	import { RecipeSteps } from "$lib/recipes/RecipeSteps"
	import { TwoOneColumn } from "$lib/design/TwoOneColumn"
	import { WingberryCake } from "$lib/recipes/WingberryCake"
</script>

<Page title="{WingberryCake.name}">
	<div class="{TwoOneColumn()}">
		<QuestPanel imageSrc={WingberryCake.image.src} imageAlt={WingberryCake.image.alt}>
			<p>{WingberryCake.description}</p>
		</QuestPanel>
		<TitledPanel title="Ingredients">
			<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={WingberryCake.ingredients}>
				<ItemCell>{item.name}</ItemCell>
				<ItemCell align="center"><RarityIndicator rarity={item.rarity} /></ItemCell>
				<ItemCell align="center">
					{#if item.measure}
						<span class="{Color.text.emphasized()}">
							<FormattedMeasure value={item.measure} />
						</span>
					{:else}
						<span>—</span>
					{/if}
				</ItemCell>
			</ItemTable>
		</TitledPanel>
	</div>
	<TitledPanel title="Directions">
		<RecipeSteps steps={WingberryCake.directions.steps} />
	</TitledPanel>
</Page>
