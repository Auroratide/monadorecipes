<script lang="ts">
	import type { MeasuredIngredient } from "../Recipe"
	import { Font } from "$lib/design/Font"
	import { Color } from "$lib/design/Color"
	import { ItemTable, ItemTextCell, ItemIconCell } from "$lib/design/ItemTable"
	import { IngredientTypeIcon } from "../IngredientTypeIcon"
	import { RarityIndicator } from "$lib/rarity/RarityIndicator"
	import { FormattedMeasure } from "../Measure"

	export let ingredients: MeasuredIngredient[]
</script>

<div class="recipe-ingredients">
	<ItemTable let:item headings={["", "Name", "Rarity", "Needed"]} items={ingredients}>
		<ItemIconCell align="center" noSpace>
			<IngredientTypeIcon type={item.type} />
		</ItemIconCell>
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
</div>

<style>
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
			padding: 0;
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