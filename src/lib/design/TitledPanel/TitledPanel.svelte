<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Bordered } from "$lib/design/Bordered"
	import { Font } from "$lib/design/Font"
	import { Spacing } from "$lib/design/Spacing"
	import { TriangleCorners } from "$lib/design/TriangleCorners"

	export let title: string
</script>

<section class="reposition-for-overlap">
	<h2 class="{Font.size.stars(3)} {TriangleCorners({ type: "right" })} {Color.background.shiny()} {Spacing.centeredLabel({ alignment: "left" })} overlap-bottom label-padding partial-width">{title}</h2>
	<div class="{Color.background.dark({ frilled: true })} {Color.border.dark()} panel-padding space-for-top-overlap {Bordered()} typographic no-decoration-break">
		<slot></slot>
	</div>
</section>

<style>
	section { width: 100%; }

	.no-decoration-break {
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}

	.reposition-for-overlap {
		margin-block: -1rem 1rem;
	}

	.overlap-bottom {
		transform: translateY(50%);
	}

	.label-padding {
		padding-inline: 1rem;
	}

	.partial-width {
		max-width: min(90%, 40ch);
	}

	.panel-padding {
		padding: 1rem;
	}

	.panel-padding :global(p:last-child) {
		margin-bottom: 0;
	}

	.space-for-top-overlap {
		padding-top: 1.5rem;
	}

	.typographic :global(p) {
		line-height: 1.5;
	} .typographic :global(li) {
		margin-block-end: 0.5em;
	} .typographic :global(> h3) {
		font-size: 1.125em;
		margin-block: 2em 0.5em;
		color: var(--color-text-emphasized);
	}

	@media print {
		h2 {
			display: inline-block;
			background: white;
			width: auto;
			margin-inline-start: 0.5em;
		}

		.label-padding {
			padding-inline: 0.25em;
		}
	}
</style>