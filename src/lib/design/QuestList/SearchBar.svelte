<script lang="ts">
	import { TriangleCorners } from "../TriangleCorners"
	import { Color } from "../Color"
	import { Container } from "../Container"
	import { Elevated } from "../Elevated"
	import { Spacing } from "../Spacing"
	import SearchIcon from "$lib/design/icons/SearchIcon.svelte"

	export let searchTerm: string
</script>

<div class="over-content {Elevated({ useFilter: true })}">
	<search class="{Container()} {Color.background.banner()} {TriangleCorners({})} overlap-top centered">
		<form>
			<div class="with-centered-icon">
				<label for="text-filter"><SearchIcon /></label>
				<p>{searchTerm ? searchTerm : "Search"}</p>
				<input
					id="text-filter"
					type="search"
					name="q"
					bind:value={searchTerm}
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

	.over-content {
		position: relative;
		z-index: 2;
	}

	.overlap-top {
		transform: translateY(-50%);
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
