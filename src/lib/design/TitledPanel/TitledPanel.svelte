<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { TriangleCorners } from "$lib/design/TriangleCorners"

	export let title: string;
</script>

<section class="reposition-for-overlap">
	<h2 class="{Font.size.stars(3)} {TriangleCorners({ type: "right" })} shiny-background overlap-bottom label-padding partial-width">{title}</h2>
	<div class="{Color.background.dark({ translucent: true })} {Color.border.dark()} panel-padding space-for-top-overlap bordered">
		<slot></slot>
	</div>
</section>

<style>
	.reposition-for-overlap {
		transform: translateY(-1rem);
	}

	.shiny-background {
		background: linear-gradient(hsl(239, 56%, 50%), hsl(228, 72%, 60%) 50%, hsl(229, 64%, 56%) 52%, hsl(224, 75%, 60%));
	}

	.overlap-bottom {
		transform: translateY(50%);
	}

	.label-padding {
		padding: 0.25rem 1rem;
	}

	.partial-width {
		max-width: min(90%, 40ch);
	}

	.panel-padding {
		padding: 1rem;
	}

	.space-for-top-overlap {
		padding-top: 1.5rem;
	}

	.bordered {
		border-width: 1px;
		border-style: solid;
	}
</style>