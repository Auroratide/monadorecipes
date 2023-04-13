<script lang="ts">
	import type { QuestItem } from "./QuestItem";
	import QuestItemLink from "./QuestItemLink.svelte";
	import { Container } from "../Container";
	import { Elevated } from "../Elevated";
	import { Color } from "../Color";

	export let baseUrl: string;
	export let items: QuestItem[];
</script>

<section class="{Elevated()} {Color.background.light({ translucent: true })} pad-block">
	<div class="{Container()}">
		<ul class="no-list three-columns">
			{#each items as item (item.id)}
				<li>
					<QuestItemLink {baseUrl} {item} />
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
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
