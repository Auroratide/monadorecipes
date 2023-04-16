<script lang="ts">
	import { TriangleCorners } from "../TriangleCorners";
	import { Color } from "../Color";
	import { Container } from "../Container";
	import { Elevated } from "../Elevated";
	import { VisuallyHidden } from "../VisuallyHidden";
	import { createEventDispatcher } from "svelte";
	import { Spacing } from "../Spacing";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";

	const dispatch = createEventDispatcher()

	let textFilter = browser ? $page.url.searchParams.get("q") ?? "" : "";
	let searchField: HTMLInputElement;

	const submit = () => {
		dispatch("search", {
			textFilter,
		});

		// keep focus after a soft page refresh
		if (browser) {
			setTimeout(() => searchField.focus(), 0);
		}
	};

	let lastInput = "";
	$: {
		if (textFilter === "" && textFilter !== lastInput) {
			submit();
		}
		lastInput = textFilter;
	}
</script>

<div class="{Elevated({ useFilter: true })}">
	<search class="{Container()} {Color.background.banner()} {TriangleCorners({})} overlap-top centered">
		<form on:submit|preventDefault={submit} method="get">
			<label for="text-filter" class="{VisuallyHidden()}">Search</label>
			<input bind:this={searchField} id="text-filter" type="search" name="q" bind:value={textFilter} placeholder="Search" class="invisible-input {Spacing.centeredLabel()} long-input" />
		</form>
	</search>
</div>

<style>
	search {
		display: block;
		width: calc(100% - 2 * var(--container-padding));
		padding: 0.25em 1em;
	}

	form {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
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
		color: var(--color-text-emphasized);
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
