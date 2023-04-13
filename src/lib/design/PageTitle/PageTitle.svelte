<script lang="ts">
	import { Font } from "../Font";
	import { Color } from "../Color";
	import { Elevated } from "../Elevated";
	import { TriangleCorners } from "../TriangleCorners";
	import { ContainerPadding } from "../Container";

	export let title: string;
	export let subtitle: string;
</script>

<hgroup class="{Elevated({ useFilter: true })}">
	<h1 class="{Font.size.stars(5)} {Font.shadowed()} {TriangleCorners({ type: "right" })} clipped-border row">
		<span class="{TriangleCorners({ type: "right" })} {ContainerPadding({ side: "left" })} {Color.background.shiny()} triangle-padding-right on-top inset">📖</span>
		<span class="{TriangleCorners({ type: "right" })} bg-shiny-light row-fill triangle-padding-right overlapped-left on-bottom inset">{title}</span>
	</h1>
	<p class="{Font.size.stars(3)} {Color.border.muted()} {Color.background.banner()} {ContainerPadding({ side: "right" })} border-block padding-tight row-fill overlapped-left">{subtitle}</p>
</hgroup>

<style>
	h1 {
		line-height: 1;
		box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25) inset;
	}

	.border-block {
		border-top-width: 0.0625rem;
		border-bottom-width: 0.0625rem;
		border-right-width: 0;
		border-left-width: 0;
		border-style: solid;
	}

	.padding-tight {
		padding: 0.25em 0.5em 0.125em;
		line-height: 1;
	}

	.clipped-border {
		padding: 0.0625rem 0.0625rem 0.0625rem 0;
		background: var(--color-border-regular);
	}
	
	.row {
		display: flex;
		flex-direction: row;
	}

	.row-fill {
		flex: 1;
	}

	.triangle-padding-right {
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		padding-right: 1em;
	}

	.overlapped-left {
		margin-left: -3rem;
		padding-left: 4rem;
	}
	
	.on-bottom {
		position: relative;
		z-index: 1;
	}

	.on-top {
		position: relative;
		z-index: 2;
	}

	.inset {
		box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.333) inset;
	}

	@media screen and (min-width: 800px) {
		hgroup {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}
	}

	@media screen and (max-width: 800px) {
		h1.triangle-corners {
			--triangle-corners-width: 0;
		}

		h1 span.triangle-corners:last-child {
			--triangle-corners-width: 0;
		}
	}

	/* TODO: need bg image of some sort */
	.bg-shiny-light {
		background: linear-gradient(#c2cfee, #c0d0fa 50%, #92a6d5 52%, #9cbcee)
	}
</style>