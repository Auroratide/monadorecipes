<script lang="ts">
	import type { QuestItem } from "./QuestItem";
	import QuestItemLink from "./QuestItemLink.svelte";
	import SearchBar from "./SearchBar.svelte";
	import { Container } from "../Container";
	import { Elevated } from "../Elevated";
	import { Color } from "../Color";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	export let baseUrl: string;
	export let items: QuestItem[];

	$: filteredItems = items.filter((item) => {
		const searchTerm = $page.url.searchParams.get("q") ?? "";
		return item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
	})

	const search = (event: CustomEvent<{ textFilter: string }>) => {
		const { textFilter } = event.detail;
		goto(`?q=${textFilter}`, { replaceState: true });
	};
</script>

<section class="{Elevated()} {Color.background.light({ translucent: true })} overlap-container">
	<SearchBar on:search={search} />
	<div class="{Container()} pad-block">
		<ul class="no-list three-columns">
			{#each filteredItems as item (item.id)}
				<li>
					<QuestItemLink {baseUrl} {item} />
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.overlap-container {
		position: relative;
	}

	.pad-block {
		padding-block: 3rem;
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
</style>
