<script lang="ts">
	import type { PageData } from "./$types";
	import { Backdrop, BackdropScene } from "$lib/design/Backdrop";
	import { QuestList } from "$lib/design/QuestList";
	import { Url } from "$lib/Url";
	import { PageTitle } from "$lib/design/PageTitle";
	import Footer from "$lib/design/Page/Footer.svelte";
	import CookingIcon from "$lib/design/icons/CookingIcon.svelte";
	import type { Recipe } from "$lib/recipes/Recipe";

	export let data: PageData;
	$: list = data.items.filter((item: Recipe) => !item.unlisted);
</script>

<svelte:head>
	<title>Monado Recipes: Eat Food from Xenoblade Chronicles</title>
</svelte:head>

<Backdrop scene={BackdropScene.Titans} />
<header class="space-within">
	<PageTitle title="Monado Recipes" subtitle="Xenoblade Chronicles Cuisine">
		<CookingIcon slot="icon" />
	</PageTitle>
</header>
<main>
	<QuestList baseUrl={Url.recipes()} items={list} />
</main>
<Footer />

<style>
	.space-within {
		padding-top: 0.5rem;
		padding-bottom: 2rem;
	}
</style>
