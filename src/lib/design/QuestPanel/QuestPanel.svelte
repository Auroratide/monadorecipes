<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { Elevated } from "$lib/design/Elevated"
</script>

<section class="{Color.background.light()} {Color.text.dark()} {Elevated()} padded column">
	<div class="{Elevated()} small-max-width">
		<slot name="image"></slot>
	</div>
	<div class="{Font.size.stars(2)} lined">
		<slot></slot>
	</div>
</section>

<style>
	.small-max-width {
		max-width: min(600px, 90%);
		margin: 0 auto;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.padded {
		padding: 2rem;
	}

	.lined {
		background: linear-gradient(transparent 1.15em, hsl(217, 24%, 61%) 1.15em);
		background-size: 1em 1.25em;
	}

	.lined :global(p) {
		line-height: 1.25;
		margin-bottom: 1.25em;
	}

	.lined :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
