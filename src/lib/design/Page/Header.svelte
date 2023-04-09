<script lang="ts">
	import { Color } from "$lib/design/Color"
	import { Font } from "$lib/design/Font"
	import { Container } from "$lib/design/Container"
	import { Url } from "$lib/Url"

	export let title: string;
</script>

<header>
	<div class="{Color.background.banner()} {Color.border.muted()} large-spacing bottom-border">
		<div class="{Container()}">
			<h1 class="{Font.size.stars(5)}">{title}</h1>
		</div>
	</div>
	<nav aria-label="Site" class="{Font.size.stars(4)} {Color.background.dark()} {Color.border.dark()} bottom-border right-border rounded-corner">
		<div class="{Container()}">
			<a href="{Url.home()}" class="{Color.text.muted()}">More Recipes</a>
		</div>
	</nav>
</header>

<style>
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
		padding: 0.25rem 2rem;
	}
</style>
