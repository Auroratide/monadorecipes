<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { Font } from "$lib/design/Font"
	import { Color } from "$lib/design/Color"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { QuestPanel } from "$lib/design/QuestPanel"
	import { RarityIndicator } from "$lib/rarity/RarityIndicator"
	import { RecipeSteps } from "$lib/recipes/RecipeSteps"
	import { TwoOneColumn } from "$lib/design/TwoOneColumn"
	import { OneColumn } from "$lib/design/OneColumn"
	import { BasicPanel } from "$lib/design/BasicPanel"
	import { FlatDl } from "$lib/design/FlatDl"
	import { RichText } from "$lib/rich-text/RenderedRichText"
	import { VisuallyHidden } from "$lib/design/VisuallyHidden"
	import { Url, External } from "$lib/Url"
	import { Button } from "$lib/design/Button"
	import { ResponsiveImage } from "$lib/image/ResponsiveImage"
	import { RecipeTypeIcon } from "$lib/recipes/RecipeTypeIcon"
	import type { Recipe } from "../Recipe"
	import { buildOpenGraph, OpenGraphMeta } from "$lib/open-graph";
	import { RecipeIngredients } from "../RecipeIngredients";
	import { NoPrint } from "$lib/design/NoPrint";
	
	export let recipe: Recipe;

	$: openGraph = buildOpenGraph({
		title: recipe.name,
		description: recipe.description,
		image: recipe.image.fallback.src,
		relativeUrl: Url.recipes(recipe.id),
	})
</script>

<OpenGraphMeta value={openGraph} />
<Page title="{recipe.name}" description={recipe.description}>
	<RecipeTypeIcon slot="header-icon" type={recipe.type} />
	<div class="print:two-columns">
		<div class="{TwoOneColumn()} print:invert print:small-column">
			<div class="{OneColumn()}">
				<div class="print:square-images print:bordered-images">
					<QuestPanel>
						<ResponsiveImage slot="image" image={recipe.image} alt="{recipe.image.alt}" />
						<p class="{NoPrint()}">{recipe.description}</p>
					</QuestPanel>
				</div>
				<div class="{NoPrint()}">
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
			</div>
			<TitledPanel title="Ingredients">
				<RecipeIngredients ingredients={recipe.ingredients} />
			</TitledPanel>
		</div>
		<div class="print:large-column">
			<TitledPanel title="Directions">
				<RecipeSteps steps={recipe.directions.steps} />
			</TitledPanel>
		</div>
	</div>
	<div class="{NoPrint()}">
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
	</div>
	<aside class="{NoPrint()}">
		<h2 class="{VisuallyHidden()}">Feedback</h2>
		<p class="{Font.size.stars(3)} button-row" style:text-align="center" style:padding-block="1.25rem">
			<a href="{External.feedback(recipe.name)}" class="{Button()}" target="_blank">
				Have feedback?
			</a>
			<button on:click={() => window.print()} class="{Button()}">Print</button>
		</p>
	</aside>
</Page>

<style>
	@media print {
		.print\:invert {
			gap: 0;
			flex-direction: column-reverse;
		}

		.print\:invert > :global(*) {
			flex: 1;
		}

		.print\:two-columns {
			display: flex;
			flex-direction: row;
			gap: 1rem;
		}

		.print\:small-column { flex: 2; }
		.print\:large-column { flex: 3; }

		.print\:square-images :global(img) {
			aspect-ratio: 1;
			width: 100%;
			object-fit: cover;
		}

		.print\:bordered-images :global(picture) {
			padding: 0.5rem;
			border: var(--border-width-1-star) solid var(--color-border-dark);
		}
	}

	.button-row {
		display: flex;
		flex-direction: row;
		gap: 1em;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
