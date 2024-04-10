<script lang="ts">
	export let steps: string[]
</script>

<ol>
	{#each steps as step}
		<li><p>{step}</p></li>
	{/each}
</ol>

<style>
	ol {
		padding: 0;
		counter-reset: directions;
		margin: 0;
	}

	li {
		list-style: none;
		margin-block-end: 1.75rem;
	}

	li:last-child { margin-block-end: 0; }

	li::before {
		display: block;
		content: "Step " counter(directions);
		font-weight: bold;
		font-size: var(--font-size-1-star);
		color: var(--color-text-emphasized);
		-webkit-text-stroke: 0.005em var(--color-bg-medium);
		margin-bottom: 0.25rem;
		counter-increment: directions;
	}

	@media print {
		li::before {
			-webkit-text-stroke: 0;
		}
	}
</style>
