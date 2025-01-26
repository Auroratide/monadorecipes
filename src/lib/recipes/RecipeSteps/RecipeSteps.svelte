<script lang="ts">
	import { FormattedMeasure } from "../Measure"
	import type { DirectionStep } from "../Recipe"

	export let steps: DirectionStep[]
</script>

<ol>
	{#each steps as step}
		<li>
			<p>{@html step.description}</p>
			{#if step.ingredients.length > 0}
				<p class="muted comma-row">
					{#each step.ingredients as ingredient}
						<span>
							{#if ingredient.measure != null}
								<span><FormattedMeasure value={ingredient.measure} /></span>
							{/if}
							<span>{ingredient.name}</span>
							{#if ingredient.preparation != null}
								<span>({ingredient.preparation})</span>
							{/if}
						</span>
					{/each}
				</p>
			{/if}
		</li>
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

	p {
		margin-block-end: 0.25em;
	}

	.muted {
		font-size: var(--font-size-1-star);
		color: var(--color-text-emphasized);
		padding-inline-start: 1em;
	} .muted::before {
		content: "–"
	}

	.comma-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25em 0.75ch;
	}.comma-row > * {
		padding: 0;
	} .comma-row > * > :last-child::after {
		content: ",";
	} .comma-row > *:last-child > :last-child:after {
		content: "";
	}

	@media print {
		li::before {
			-webkit-text-stroke: 0;
		}

		.muted {
			padding: 0;
		}
	}
</style>
