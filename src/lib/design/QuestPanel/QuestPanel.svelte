<script lang="ts">
	import { Color } from "$lib/design/Color";
	import { Font } from "$lib/design/Font";
	import { Elevated } from "$lib/design/Elevated";

	export let imageSrc: string;
	export let imageAlt: string;
</script>

<section class="{Color.background.light()} {Color.text.dark()} {Elevated()} padded column">
	<img src={imageSrc} alt={imageAlt} class="{Elevated()}" />
	<div class="{Font.size.stars(2)} lined">
		<slot></slot>
	</div>
</section>

<style>
	img {
		display: block;
		width: 100%;
		max-width: min(600px, 90%);
		margin: auto;
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
