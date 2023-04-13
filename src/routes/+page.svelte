<script lang="ts">
	import { FriedTartariALaJin } from "$data/recipes/FriedTartariALaJin";
	import { WingberryCake } from "$data/recipes/WingberryCake";
	import { HyberMeatballStew } from "$data/recipes/HyberMeatballStew";
	import { Backdrop, BackdropScene } from "$lib/design/Backdrop";
	import { QuestList } from "$lib/design/QuestList";
	import { Url } from "$lib/Url";
	import { PageTitle } from "$lib/design/PageTitle";

	const list = [FriedTartariALaJin, WingberryCake, HyberMeatballStew]
</script>

<svelte:head>
	<title>Monado Recipes: Eat Food from Xenoblade Chronicles</title>
</svelte:head>

<Backdrop scene={BackdropScene.Titans} />
<header class="space-within">
	<PageTitle title="Monado Recipes" subtitle="Xenoblade Chronicles Cuisine" />
</header>
<main>
	<QuestList baseUrl={Url.recipes()} items={list} />
</main>

<style>
	.space-within {
		padding-top: 0.5rem;
		padding-bottom: 2rem;
	}
</style>
