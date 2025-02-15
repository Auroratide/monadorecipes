<script lang="ts">
	import type { QuestItem } from "./QuestItem"
	import QuestItemLink from "./QuestItemLink.svelte"
	import SearchBar from "./SearchBar.svelte"
	import { Container } from "../Container"
	import { Elevated } from "../Elevated"
	import { Color } from "../Color"
	import { flip } from "svelte/animate"
	import { fade } from "svelte/transition"

	export let baseUrl: string
	export let items: QuestItem[]
	export let viewtransition: string | undefined = undefined

	let searchTerm = ""
	let sourceFilter = ""
	let typeFilter = ""

	$: filteredItems = items.filter((item) => {
		return item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
	}).filter((item) => {
		return sourceFilter === "" || item.filterTerms.includes(sourceFilter)
	}).filter((item) => {
		return typeFilter === "" || item.filterTerms.includes(typeFilter)
	})
</script>

<section class="{Elevated()} {Color.background.light({ translucent: true })} overlap-container">
	<SearchBar bind:searchTerm bind:sourceFilter bind:typeFilter />
	<div class="{Container()} pad-block">
		<ul class="no-list three-columns" style:view-transition-name="{viewtransition}">
			{#each filteredItems as item, i (item.id)}
				<li in:fade={{ duration: 150, delay: i * 10 }} animate:flip={{ duration: 150 }}>
					<QuestItemLink {baseUrl} {item} />
				</li>
			{/each}
		</ul>
		{#if filteredItems.length === 0}
			<p class="{Color.text.dark()} center" aria-live="assertive">No recipes found for "{searchTerm}".</p>
		{/if}
	</div>
</section>

<style>
	.overlap-container {
		position: relative;
	}

	.pad-block {
		padding-block: 1rem 3rem;
	}

	.no-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.three-columns {
		--gap-size: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(calc(max(33.3%, var(--column-width, calc(var(--container-width) / 3))) - var(--gap-size) - var(--container-padding)), 100%), 1fr));
		gap: var(--gap-size);
		max-width: 100%;
	}

	.center {
		text-align: center;
	}
</style>
