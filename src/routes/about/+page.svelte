<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { BasicPanel } from "$lib/design/BasicPanel"
	import { External, Url } from "$lib/Url"
	import { Button } from "$lib/design/Button"
	import { QuestPanel } from "$lib/design/QuestPanel"
	import { ResponsiveImage } from "$lib/image/ResponsiveImage"
	import type { PageData } from "../$types"
	import { NoPrint } from "$lib/design/NoPrint"
	import { Font } from "$lib/design/Font"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import { Color } from "$lib/design/Color"

	export let data: PageData
</script>

<Page title="About Monado Recipes">
	<div style:view-transition-name="about" class="column">
		<BasicPanel>
			<div class="{Font.size.stars(3)}">
				<p>Monado Recipes is a fan-made repository of recipes based on food found in the <a href="https://xenoblade.fandom.com/wiki/Xenoblade_Wiki">Xenoblade Chronicles</a> games.</p>
				<p>Really, it's one big creative culinary exercise: how do you take fantasy ingredients like "Mookah Flour" and create a "Pan-Fried Tartari"? What even is a tartari anyway?</p>
				<p>We reimagine the game's recipes as real things you can cook. If you're a fan of the games or are perhaps just looking to serve something a little different, then try one of our Monado Recipes!</p>
			</div>
		</BasicPanel>
		<section class="{Font.size.stars(4)} text-center">
			<a class="{Button()}" href="{Url.home()}">Find a Recipe</a>
		</section>
		<section class="row">
			{#each data.favoriteRecipes as recipe (recipe.id)}
				<QuestPanel>
					<img-zoom slot="image">
						<ResponsiveImage image={recipe.image} alt="{recipe.image.alt}" />
					</img-zoom>
					<p class="{NoPrint()} text-center">
						<a href="{Url.recipes(recipe.id)}" class="{Color.text.dark({ onFocus: true })} no-underline">{recipe.name}</a>
					</p>
				</QuestPanel>
			{/each}
		</section>
		<TitledPanel title="Want to help?">
			<p>Our goal is to eventually represent every recipe found in the Xenoblade universe. That's almost 100 recipes! It's a lot of work translating them all into something edible (yes, including Mythra's culinary masterpieces), so any help ideating recipes or providing feedback is greatly appreciated.</p>
			<ul>
				<li><p>Feedback on a specific recipe can be left via our online survey: <a href="{External.feedback()}">Leave Feedback</a></p></li>
				<li><p>New recipe suggestions can be left as a Github Issue, where there's more opportunity for collaboration: <a href="{External.issue()}">Suggest New Recipe</a></p></li>
			</ul>
		</TitledPanel>
	</div>
</Page>

<style>
	.column {
		display: flex;
		flex-direction: column;
		gap: 4em;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
	} .row > :global(*) {
		min-inline-size: 15em;
		max-inline-size: calc(33% - 0.5em);
	}
	
	.text-center { text-align: center;}
	.no-underline { text-decoration: none; }

</style>