<script lang="ts">
	import type { MeasuredIngredient } from "../Recipe";
	import { Font } from "$lib/design/Font";
	import { Color } from "$lib/design/Color";
	import { ItemTable, ItemTextCell, ItemIconCell } from "$lib/design/ItemTable";
	import { IngredientTypeIcon } from "../IngredientTypeIcon";
	import { RarityIndicator } from "$lib/rarity/RarityIndicator";
	import { FormattedMeasure } from "../Measure";

	export let ingredients: MeasuredIngredient[]
</script>

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
