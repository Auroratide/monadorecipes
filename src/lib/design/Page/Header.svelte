<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { Bordered } from "$lib/design/Bordered"
	import { Container, ContainerPadding } from "$lib/design/Container"
	import { Spacing } from "$lib/design/Spacing"
	import { Url } from "$lib/Url"
	import CookingIcon from "../icons/CookingIcon.svelte"
	import topbarBody from "./topbar-body.png"
	import topbarCorner from "./topbar-corner.png"

	export let title: string
</script>

<header>
	<div class="{Color.background.banner()} {Color.border.muted()} {Bordered({ bottom: true })}">
		<div class="{Container()} row">
			<div class="{Font.size.stars(5)} {Spacing.centeredIcon({ alignment: "left" })}">
				<slot name="icon">
					<CookingIcon />
				</slot>
			</div>
			<h1 class="{Font.size.stars(5)} {Spacing.centeredLabel({ alignment: "left" })}" style="{Spacing.stars(5)}">{title}</h1>
		</div>
	</div>
	<nav aria-label="Site" class="{Font.size.stars(3)} inverse-rounded-corner" style:--bg-body="url('{topbarBody}')" style:--bg-corner="url('{topbarCorner}')">
		<div class="{ContainerPadding({ side: "left" })}">
			<span class="{Spacing.centeredLabel({ alignment: "left" })}" style="{Spacing.stars(1)}">
				<a href="{Url.home()}" class="{Color.text.muted()}">More Recipes</a>
			</span>
		</div>
	</nav>
</header>

<style>
	.row {
		display: flex;
		flex-direction: row;
		gap: 0.75em;
	}

	.large-spacing {
		padding: 2rem 2rem;
	}

	.inverse-rounded-corner {
		background-image: var(--bg-body);
		background-repeat: repeat-x;
		position: relative;
		height: 33px;
	} .inverse-rounded-corner::after {
		content: "";
		position: absolute;
		inset-block-start: 0;
		inset-inline-end: -55px;
		display: block;
		background-image: var(--bg-corner);
		inline-size: 55px;
		block-size: 33px;
	}

	nav {
		padding-block: 0.25rem;
		margin-right: max(2rem, 20%);
	}

	nav a {
		text-decoration: none;
	}

	@media print {
		nav {
			display: none;
		}
	}
</style>
