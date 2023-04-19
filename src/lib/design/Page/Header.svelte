<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { Container, ContainerPadding } from "$lib/design/Container"
	import { Spacing } from "$lib/design/Spacing"
	import { Url } from "$lib/Url"
	import DessertsIcon from "$lib/design/icons/DessertIcon.svelte";

	export let title: string;
</script>

<header>
	<div class="{Color.background.banner()} {Color.border.muted()} bottom-border">
		<div class="{Container()} row">
			<div class="{Font.size.stars(5)} {Spacing.centeredIcon({ alignment: "left" })}">
				<slot name="icon"></slot>
			</div>
			<h1 class="{Font.size.stars(5)} {Spacing.centeredLabel({ alignment: "left" })}" style="{Spacing.stars(5)}">{title}</h1>
		</div>
	</div>
	<nav aria-label="Site" class="{Font.size.stars(4)} {Color.background.darkShiny()} {Color.border.dark()} bottom-border right-border rounded-corner">
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

	.bottom-border {
		border-bottom-width: 0.0625em;
		border-bottom-style: solid;
	}

	.right-border {
		border-right-width: 0.0625em;
		border-right-style: solid;
	}

	.rounded-corner {
		border-radius: 0 0 2em 0;
	}

	nav {
		padding-block: 0.25rem;
		margin-right: max(2rem, 20%);
	}

	nav a {
		text-decoration: none;
	}
</style>
