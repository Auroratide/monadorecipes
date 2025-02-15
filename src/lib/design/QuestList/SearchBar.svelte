<script lang="ts">
	import { TriangleCorners } from "../TriangleCorners"
	import { Color } from "../Color"
	import { Container } from "../Container"
	import { Elevated } from "../Elevated"
	import { Spacing } from "../Spacing"
	import { RecipeSource, RecipeType } from "$lib/recipes/Recipe"
	import SelectMenu from "./SelectMenu.svelte"
	import { VisuallyHidden } from "../VisuallyHidden"

	export let searchTerm: string
	export let sourceFilter: string
	export let typeFilter: string

	const sourceOptions = [{ id: "source-all", value: "", label: "All" }].concat(
		Object.entries(RecipeSource).map(([id, name]) => ({
			id: id,
			value: name,
			label: name,
		})),
	)

	const typeOptions = [{ id: "type-all", value: "", label: "All" }].concat(
		Object.entries(RecipeType).map(([id, name]) => ({
			id: id,
			value: name,
			label: name,
		})),
	)
</script>

<div class="over-content {Elevated({ useFilter: true })}">
	<search class="{Container()} overlap-top centered">
		<div class="{Color.background.banner()} {TriangleCorners({})} pseudo-background"></div>
		<form>
			<div class="relative">
				<label for="text-filter" class="{VisuallyHidden()}">Search</label>
				<input
					id="text-filter"
					type="search"
					name="q"
					bind:value={searchTerm}
					placeholder="Search"
					class="{Spacing.centeredLabel()} long-input"
				/>
			</div>
			<SelectMenu label="Source" name="source" options={sourceOptions} bind:value={sourceFilter} />
			<SelectMenu label="Category" name="type" options={typeOptions} bind:value={typeFilter} />
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
		justify-content: space-around;
	} form > :global(*) {
		flex: 1;
	}

	.pseudo-background {
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.over-content {
		position: relative;
		z-index: 2;
	}

	.overlap-top {
		transform: translateY(-50%);
	}

	.relative {
		position: relative;
	}

	input[type="search"] {
		background: none;
		border: none;
		color: var(--color-text-regular);
		cursor: pointer;
	} input[type="search"]::placeholder {
		color: var(--color-text-emphasized);
		transition: opacity 0.075s ease-out;
	} input[type="search"]:focus::placeholder {
		opacity: 0;
	}

	.long-input { inline-size: 100%; }
	.centered { text-align: center; }
</style>
