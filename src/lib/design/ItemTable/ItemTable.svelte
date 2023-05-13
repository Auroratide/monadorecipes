<script lang="ts">
	import { Font } from "$lib/design/Font"
	import { Color } from "$lib/design/Color"
	import { TriangleCorners } from "$lib/design/TriangleCorners"

	export let items: any[]
	export let headings: string[];
</script>

<table class="spaced-rows full-width">
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
			<tr class="{Color.background.medium()} {TriangleCorners({})}">
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

	tr {
		margin-bottom: 1px;
	}

	tr > :global(td) {
		padding-inline: 0.5em;
		line-height: 1;
	}

	tr > :global(td:first-child) {
		padding-inline-start: 1.5em;
	}

	tr > :global(td:last-child) {
		padding-inline-end: 1.5em;
	}
</style>
