<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { Url } from "$lib/Url"

	export let title: string;
</script>

<header>
	<div class="{Color.background.panel()} {Color.border.muted()} large-spacing bottom-border">
		<h1 class="{Font.size.stars(5)}">{title}</h1>
	</div>
	<nav aria-label="Site" class="{Font.size.stars(4)} {Color.background.dark()} {Color.border.dark()} bottom-border right-border rounded-corner">
		<a href="{Url.home()}" class="{Color.text.muted()}">More Recipes</a>
	</nav>
</header>

<style>
	.large-spacing {
		padding: 2em 2em;
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
		padding: 0.125em 2em;
		max-width: 80%;
	}
</style>
