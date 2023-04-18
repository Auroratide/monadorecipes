<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { ItemTable, ItemTextCell, ItemIconCell } from "$lib/design/ItemTable"
	import { QuestPanel } from "$lib/design/QuestPanel"
	import { RarityIndicator } from "$lib/rarity/RarityIndicator"
	import { FormattedMeasure } from "$lib/recipes/Measure"
	import { RecipeSteps } from "$lib/recipes/RecipeSteps"
	import { TwoOneColumn } from "$lib/design/TwoOneColumn"
	import { OneColumn } from "$lib/design/OneColumn"
	import { BasicPanel } from "$lib/design/BasicPanel"
	import { FlatDl } from "$lib/design/FlatDl"
	import { RichText } from "$lib/rich-text/RenderedRichText"
	import { VisuallyHidden } from "$lib/design/VisuallyHidden"
	import { External } from "$lib/Url"
	import { Button } from "$lib/design/Button"
	import { ResponsiveImage } from "$lib/image/ResponsiveImage"
	import type { Recipe } from "../Recipe"
	
	export let recipe: Recipe;

	console.log(recipe.image)
</script>

<Page title="{recipe.name}">
	<div class="{TwoOneColumn()}">
		<div class="{OneColumn()}">
			<QuestPanel>
				<ResponsiveImage slot="image" image={recipe.image} alt="{recipe.image.alt}" />
				<p>{recipe.description}</p>
			</QuestPanel>
			<BasicPanel title="Info">
				<FlatDl>
					<dt>Time</dt>
					<dd>{recipe.timeInMinutes} min</dd>
					<dt>Source</dt>
					<dd>{recipe.source}</dd>
					<dt>Rarity</dt>
					<dd><RarityIndicator rarity={recipe.rarity} /></dd>
				</FlatDl>
			</BasicPanel>
		</div>
		<TitledPanel title="Ingredients">
			<ItemTable let:item headings={["Name", "Rarity", "Needed"]} items={recipe.ingredients}>
				<ItemTextCell>
					<span>
						{item.name}
						{#if item.preparation}
							<span class="{Font.size.stars(1)}">({item.preparation})</span>
						{/if}
					</span>
				</ItemTextCell>
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
	<TitledPanel title="Interpretation">
		<div class="{TwoOneColumn()}" style:--container-width="calc(1050px - 2rem)">
			<BasicPanel title="Game Ingredients" titleLevel={3}>
				<FlatDl>
					{#each Object.entries(recipe.gameIngredients) as ingredient}
						<dt>{ingredient[0]}</dt>
						<dd>&times;{ingredient[1]}</dd>
					{/each}
				</FlatDl>
			</BasicPanel>
			<BasicPanel>
				<h3 class="{VisuallyHidden()}">Description</h3>
				<RichText value={recipe.interpretation} />
			</BasicPanel>
		</div>
	</TitledPanel>
	<aside>
		<h2 class="{VisuallyHidden()}">Feedback</h2>
		<p class="{Font.size.stars(3)}" style:text-align="center" style:padding-block="1.25rem">
			<a href="{External.feedback(recipe.name)}" class="{Button()}" target="_blank">
				Have feedback?
			</a>
		</p>
	</aside>
</Page>
