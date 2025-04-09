<script lang="ts">
	import type { IngredientGroup } from "../Recipe"
	import { Font } from "$lib/design/Font"
	import { Color } from "$lib/design/Color"
	import { ItemTable, ItemTextCell, ItemIconCell } from "$lib/design/ItemTable"
	import { IngredientTypeIcon } from "../IngredientTypeIcon"
	import { RarityIndicator } from "$lib/rarity/RarityIndicator"
	import { FormattedMeasure } from "../Measure"
	import { TriangleCorners } from "$lib/design/TriangleCorners"
	import { Spacing } from "$lib/design/Spacing"
	import { Elevated } from "$lib/design/Elevated"

	export let ingredients: IngredientGroup[]
</script>

<div class="recipe-ingredients">
	{#each ingredients as group}
		<section class="ingredient-group">
			{#if ingredients.length > 1}
				<!-- <h3 class="{Font.size.stars(2)}">
					<span class="inline {Color.background.shinySecondary()} {TriangleCorners({ type: "both" })} {Spacing.centeredLabel()} {Elevated({ useFilter: true })}">{group.name}</span>
				</h3> -->
				<h3 class="{Font.size.stars(2)}">
					<RarityIndicator rarity={1} />
					<span>{group.name}</span>
					<RarityIndicator rarity={1} />
				</h3>
			{/if}
			<ItemTable let:item headings={["", "Name", "Rarity", "Needed"]} items={group.ingredients} rowclass={(item) => item.measure == null ? "no-measure" : ""}>
				<ItemIconCell align="center" noSpace>
					<IngredientTypeIcon type={item.type} />
				</ItemIconCell>
				<ItemTextCell>
					<span class="flex-row">
						<span>{item.name}</span>
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
		</section>
	{/each}
</div>

<style>
	.flex-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75ch;
	}

	h3 {
		text-align: center;
	}

	.ingredient-group {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}

	.inline {
		display: inline-block;
		padding-inline: 3em;
		/* margin-inline: 2em; */
	}

	.recipe-ingredients {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	@media print {
		.recipe-ingredients :global(table) {
			border-collapse: collapse;
		}

		.recipe-ingredients :global(thead),
		.recipe-ingredients :global(td:nth-child(3)) {
			display: none;
		}

		.recipe-ingredients :global(tr) {
			display: grid;
			align-items: center;
			gap: 0.333em;
			grid-template-columns: auto auto 1fr;
			margin-block-end: 0.333em;
			place-items: start;
		}

		.recipe-ingredients :global(tr.no-measure td:nth-child(4))  {
			display: none;
		}

		.recipe-ingredients :global(td) {
			padding: 0;
		}

		.recipe-ingredients :global(td span) {
			display: inline;
			text-align: left;
		}

		.recipe-ingredients :global(td:nth-child(1)) {
			font-size: 0.667rem;
			padding: 0.0625em 0 0 0;
		}

		.recipe-ingredients :global(td:nth-child(4)) {
			grid-area: 1 / 2;
			padding: 0 0 0 0.333em;
		}

		.recipe-ingredients :global(td:nth-child(2)) {
			grid-area: 1 / 3;
		}
	}
</style>