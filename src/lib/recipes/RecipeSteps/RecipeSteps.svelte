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
	}

	li {
		list-style: none;
		margin-bottom: 1rem;
	}

	li::before {
		display: block;
		content: "Step " counter(directions);
		font-weight: bold;
		font-size: var(--font-size-1-star);
		color: var(--color-text-emphasized);
		-webkit-text-stroke: 0.01em var(--color-bg-medium);
		margin-bottom: 0.25rem;
		counter-increment: directions;
	}

	@media print {
		li::before {
			-webkit-text-stroke: 0;
		}
	}
</style>
