<script lang="ts">
	export let items: any[]
	export let headings: string[]
</script>

<table>
	<thead>
		{#each headings as heading}
			<th>{heading}</th>
		{/each}
	</thead>
	<tbody>
		{#each items as item}
			<slot {item}><tr></tr></slot>
		{/each}
	</tbody>
</table>
