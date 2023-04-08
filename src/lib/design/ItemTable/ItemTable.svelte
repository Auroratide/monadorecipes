<script lang="ts">
	import { Font } from "$lib/design/Font"
	import { Color } from "$lib/design/Color"

	export let items: any[]
	export let headings: string[];
</script>

<table class="spaced-rows">
	<thead>
		{#each headings as heading}
			<th class="{Font.size.stars(1)} {Color.text.muted()} normal-weight">
				{heading}
			</th>
		{/each}
	</thead>
	<tbody>
		{#each items as item}
			<tr class="blue-background">
				<slot {item}></slot>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.spaced-rows {
		border-collapse: separate;
		border-spacing: 0 0.375em;
	}

	.normal-weight { font-weight: normal; }

	tr {
		margin-bottom: 1px;
	}

	.blue-background {
		background: #29328d;
	}
</style>
