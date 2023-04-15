<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { Color } from "$lib/design/Color"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemTextCell, ItemIconCell } from "$lib/design/ItemTable"
	import { QuestPanel } from "$lib/design/QuestPanel"
	import { RarityIndicator } from "$lib/rarity/RarityIndicator"
	import { FormattedMeasure } from "$lib/recipes/Measure"
	import { RecipeSteps } from "$lib/recipes/RecipeSteps"
	import { TwoOneColumn } from "$lib/design/TwoOneColumn"
	import type { Recipe } from "../Recipe"
	
	export let recipe: Recipe;
</script>

<Page title="{recipe.name}">
	<div class="{TwoOneColumn()}">
		<QuestPanel imageSrc={recipe.image.src} imageAlt={recipe.image.alt}>
			<p>{recipe.description}</p>
		</QuestPanel>
		<TitledPanel title="Ingredients">
			<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={recipe.ingredients}>
				<ItemTextCell>{item.name}</ItemTextCell>
				<ItemIconCell align="center">
					<RarityIndicator rarity={item.rarity} />
				</ItemIconCell>
				<ItemTextCell align="center">
					{#if item.measure}
						<span class="{Color.text.emphasized()}">
							<FormattedMeasure value={item.measure} />
						</span>
					{:else}
						<span>—</span>
					{/if}
				</ItemTextCell>
			</ItemTable>
		</TitledPanel>
	</div>
	<TitledPanel title="Directions">
		<RecipeSteps steps={recipe.directions.steps} />
	</TitledPanel>
</Page>
