<script lang="ts">
	import { TriangleCorners } from "../TriangleCorners";
	import { Color } from "../Color";
	import { Container } from "../Container";
	import { Elevated } from "../Elevated";
	import { VisuallyHidden } from "../VisuallyHidden";
	import { createEventDispatcher } from "svelte";
	import { page } from "$app/stores";

	const dispatch = createEventDispatcher()

	let textFilter = $page.url.searchParams.get("q") ?? "";

	const submit = () => {
		dispatch("search", {
			textFilter,
		});
	};
</script>

<div class="{Elevated({ useFilter: true })}">
	<search class="{Container()} {Color.background.banner()} {TriangleCorners({})} overlap-top centered">
		<form on:submit|preventDefault={submit} method="get">
			<label for="text-filter" class="{VisuallyHidden()}">Search</label>
			<input id="text-filter" type="search" name="q" bind:value={textFilter} on:blur|preventDefault={submit} placeholder="Search" class="invisible-input centered long-input" />
		</form>
	</search>
</div>

<style>
	search {
		display: block;
		width: calc(100% - 2 * var(--container-padding));
		padding: 0.25em 1em;
	}

	.overlap-top {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.invisible-input {
		background: none;
		border: none;
		color: var(--color-text-regular);
		cursor: pointer;
	}

	.invisible-input:focus {
		cursor: text;
	}

	.invisible-input::placeholder {
		opacity: 1;
	}

	.invisible-input:focus::placeholder {
		opacity: 0;
	}

	.long-input {
		min-width: 30ch;
	}

	.centered {
		text-align: center;
	}
</style>
