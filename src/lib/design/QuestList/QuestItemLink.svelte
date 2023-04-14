<script lang="ts">
	import type { QuestItem } from "./QuestItem";
	import { Elevated } from "../Elevated";
	import { Color } from "../Color";
	import { Font } from "../Font";
	import { Spacing } from "../Spacing";

	export let baseUrl: string;
	export let item: QuestItem;
</script>

<a class="{Elevated()} overlap-container set-aspect-ratio" href="{baseUrl}/{item.id}">
	<img src="{item.image.src}" alt="" />
	<p class="{Color.text.regular()} {Color.background.shiny({ translucent: true })} {Font.size.stars(3)} {Spacing.centeredLabel()} overlap-bottom">{item.name}</p>
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
		outline: 0.25em solid var(--color-border-selected);
	}

	img {
		width: 100%;
		height: auto;
		display: block;
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
</style>
