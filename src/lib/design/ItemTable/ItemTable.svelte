<script lang="ts" generics="T">
	import { Bordered } from "$lib/design/Bordered"
	import { Font } from "$lib/design/Font"
	import { Color } from "$lib/design/Color"
	import { TriangleCorners } from "$lib/design/TriangleCorners"

	// eslint-disable-next-line no-undef
	export let items: T[]
	export let caption: string | undefined = undefined
	export let headings: string[]
	// eslint-disable-next-line no-undef
	export let rowclass: ((item: T) => string) | undefined = undefined
</script>

<table class="spaced-rows full-width">
	{#if caption != null}
		<caption class="{Bordered({ bottom: true})} {Color.border.muted()} mid-width print:align-start print:no-border">{caption}</caption>
	{/if}
	<thead>
		<tr>
			{#each headings as heading}
				<th class="{Font.size.stars(1)} {Color.text.muted()} normal-weight">
					{heading}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<tr class="tr-triangle-borders {TriangleCorners({ type: "custom" })} {rowclass?.(item)}">
				<slot {item}></slot>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.full-width {
		width: 100%;
	}

	.spaced-rows {
		border-collapse: separate;
		border-spacing: 0 0.375em;
	}

	.normal-weight { font-weight: normal; }

	.mid-width {
		min-inline-size: 10em;
		max-inline-size: 66%;
		margin-inline: auto;
	}

	@media print {
		.print\:align-start {
			text-align: start;
			min-inline-size: none;
			max-inline-size: none;
		}

		.print\:no-border {
			border: none;
			margin-block-end: 0.25em;
		}
	}
</style>
