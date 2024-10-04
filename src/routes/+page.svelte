<script lang="ts">
	import type { PageData } from "./$types"
	import { Backdrop, BackdropScene } from "$lib/design/Backdrop"
	import { QuestList } from "$lib/design/QuestList"
	import { Url } from "$lib/Url"
	import { PageTitle } from "$lib/design/PageTitle"
	import Footer from "$lib/design/Page/Footer.svelte"
	import CookingIcon from "$lib/design/icons/CookingIcon.svelte"
	import type { Recipe } from "$lib/recipes/Recipe"
	import { buildOpenGraph, OpenGraphMeta } from "$lib/open-graph"
	import { siteDescription } from "$lib/site-info"

	export let data: PageData
	$: list = data.items.filter((item: Recipe) => !item.unlisted)

	const openGraph = buildOpenGraph({
		title: "All Recipes",
		image: "/favicon.svg",
		relativeUrl: Url.home(),
	})
</script>

<svelte:head>
	<title>Monado Recipes: Cook Food from Xenoblade Chronicles</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<OpenGraphMeta value={openGraph} />
<Backdrop scene={BackdropScene.Titans} />
<header class="space-within">
	<PageTitle title="Monado Recipes" subtitle="Real Xenoblade Chronicles Recipes">
		<CookingIcon slot="icon" />
	</PageTitle>
</header>
<main>
	<QuestList baseUrl={Url.recipes()} items={list} viewtransition="recipe-list" />
</main>
<Footer />

<style>
	.space-within {
		padding-top: 0.5rem;
		padding-bottom: 2rem;
	}
</style>
