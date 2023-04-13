<script lang="ts">
	import { FriedTartariALaJin } from "$data/recipes/FriedTartariALaJin";
	import { WingberryCake } from "$data/recipes/WingberryCake";
	import { HyberMeatballStew } from "$data/recipes/HyberMeatballStew";
	import { Backdrop, BackdropScene } from "$lib/design/Backdrop";
	import { QuestList } from "$lib/design/QuestList";
	import { Url } from "$lib/Url";
	import { Font } from "$lib/design/Font";

	const list = [FriedTartariALaJin, WingberryCake, HyberMeatballStew]
</script>

<svelte:head>
	<title>Monado Recipes: Eat Food from Xenoblade Chronicles</title>
</svelte:head>

<Backdrop scene={BackdropScene.Titans} />
<header>
	<h1>Monado Recipes</h1>
	<p>Xenoblade Chronicles Cuisine</p>
</header>
<main>
	<QuestList baseUrl={Url.recipes()} items={list} />
</main>
