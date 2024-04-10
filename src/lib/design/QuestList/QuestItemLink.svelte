<script lang="ts">
	import type { QuestItem } from "./QuestItem"
	import { Elevated } from "../Elevated"
	import { Color } from "../Color"
	import { Font } from "../Font"
	import { Spacing } from "../Spacing"
	import { ResponsiveImage } from "$lib/image/ResponsiveImage"
	import { Bracketed } from "$lib/design/Bracketed"

	export let baseUrl: string
	export let item: QuestItem
</script>

<a class="{Elevated()} overlap-container set-aspect-ratio" href="{baseUrl}/{item.id}">
	<ResponsiveImage image={item.image} alt="" />
	<p class="{Color.text.regular()} {Color.background.shiny({ translucent: true })} {Font.size.stars(3)} {Spacing.centeredLabel()} overlap-bottom">
		<Bracketed>
			{item.name}
		</Bracketed>
	</p>
</a>

<style>
	.overlap-container {
		position: relative;
		display: block;
	}

	a, a:hover, a:focus {
		outline: none;
		text-decoration: none;
	}

	a:hover, a:focus {
		outline-offset: 0;
		outline: 0.333em solid var(--color-border-selected);
		animation: var(--anim-focus);
	}

	p {
		margin: 0;
		padding-inline: 0.5em;
	}

	.overlap-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.set-aspect-ratio {
		aspect-ratio: 16 / 9;
	}

	@media (prefers-reduced-motion: reduce) {
		a:hover, a:focus {
			animation: none;
		}
	}
</style>
