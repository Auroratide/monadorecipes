<script lang="ts">
	import { Font } from "../Font"
	import { Color } from "../Color"
	import { Spacing } from "../Spacing"

	export let titleLevel: 2 | 3 | 4 | 5 | 6 = 2
	export let title: string | undefined = undefined

	$: htag = `h${titleLevel}`
</script>

<div class="{Color.background.banner({ translucent: true })} {Spacing.panel()} {Color.border.dark({ outset: true })} bordered bolt-container simple-hrs">
	{#if title}
		<svelte:element this={htag} class="{Font.size.stars(1)} {Color.text.muted()} {Spacing.after()}">
			{title}
		</svelte:element>
	{/if}
	<div class="last-no-margin">
		<slot></slot>
	</div>
	<div aria-hidden="true" class="bolt top left"></div>
	<div aria-hidden="true" class="bolt top right"></div>
	<div aria-hidden="true" class="bolt bottom left"></div>
</div>

<style>
	.bolt-container {
		position: relative;
	}

	.bolt {
		position: absolute;
		width: 0.375em;
		height: 0.375em;
		border: 0.0625rem solid var(--color-border-regular);
		pointer-events: none;
		opacity: 0.2;
	}

	.top { top: 0.125em; }
	.bottom { bottom: 0.125em; }
	.right { right: 0.125em; }
	.left { left: 0.125em; }

	.bordered {
		border-width: 0.0625rem;
		border-style: solid;
	}

	.last-no-margin > :global(*:last-child) {
		margin-bottom: 0;
	}

	.simple-hrs :global(hr) {
		max-inline-size: 10em;
		block-size: 0.0625em;
		margin-block: 1.5em;
		border: none;
		background-color: var(--color-border-regular);
		opacity: 0.4;
	}
</style>
