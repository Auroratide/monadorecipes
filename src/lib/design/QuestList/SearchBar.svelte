<script lang="ts">
	import { TriangleCorners } from "../TriangleCorners"
	import { Color } from "../Color"
	import { Container } from "../Container"
	import { Elevated } from "../Elevated"
	import { createEventDispatcher } from "svelte"
	import { Spacing } from "../Spacing"
	import { page } from "$app/stores"
	import { browser } from "$app/environment"
	import SearchIcon from "$lib/design/icons/SearchIcon.svelte"

	const dispatch = createEventDispatcher()

	let textFilter = browser ? $page.url.searchParams.get("q") ?? "" : ""
	let searchField: HTMLInputElement

	const search = () => {
		const currentFilter = $page.url.searchParams.get("q")

		if (currentFilter !== textFilter)  {
			dispatch("search", {
				textFilter,
			})
		}
	}

	const submit = () => {
		search()

		// keep focus after a soft page refresh
		if (browser) {
			setTimeout(() => searchField.focus(), 2)
		}
	}

	let lastInput = ""
	$: {
		if (textFilter === "" && textFilter !== lastInput) {
			submit()
		}
		lastInput = textFilter
	}
</script>

<div class="{Elevated({ useFilter: true })}">
	<search class="{Container()} {Color.background.banner()} {TriangleCorners({})} overlap-top centered">
		<form on:submit|preventDefault={submit} method="get">
			<div class="with-centered-icon">
				<label for="text-filter"><SearchIcon /></label>
				<p>{textFilter ? textFilter : "Search"}</p>
				<input
					bind:this={searchField}
					id="text-filter"
					type="search"
					name="q"
					bind:value={textFilter}
					on:blur={search}
					placeholder="Search"
					class="invisible-input {Spacing.centeredLabel()} long-input"
				/>
			</div>
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

	.invisible-input:focus { cursor: text; }

	.invisible-input::placeholder {
		opacity: 1;
		color: var(--color-text-regular);
	}

	.invisible-input:focus::placeholder { opacity: 0; }

	.long-input { min-width: 30ch; }
	.centered { text-align: center; }

	/* All this gymnasitcs is to place the icon next to centered input text, regardless of what that text is. */
	.with-centered-icon {
		position: relative;
		display: flex;
		align-items: center;
	}

	.with-centered-icon:focus-within label { display: none; }

	.with-centered-icon input {
		position: absolute;
		inset-block-start: 50%;
		inset-inline-start: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.with-centered-icon p {
		margin: 0;
		visibility: hidden;
	}

	.with-centered-icon label {
		cursor: pointer;
		position: absolute;
		z-index: 2;
		transform: translateX(-2em);
		block-size: 100%;
		inline-size: 1.5em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
