<script lang="ts">
	import { Spacing } from "../Spacing"
	import { VisuallyHidden } from "../VisuallyHidden"
	import { dismissable } from "./dismissable"
	import { radioFocus } from "./radio-focus"

	export let name: string
	export let label: string
	export let value: string
	export let options: {
		id: string,
		value: string,
		label: string,
	}[]

	let detailsEl: HTMLDetailsElement
	const onSelect = () => {
		if (detailsEl) detailsEl.open = false
	}
</script>

<details bind:this={detailsEl} use:dismissable use:radioFocus name="search-select">
	<summary class="{Spacing.centeredLabel()}">{label}</summary>
	<div class="menu">
		{#each options as option}
			<div class="option">
				<input id="filter-{option.id}" type="radio" bind:group={value} value="{option.value}" {name} class="{VisuallyHidden()}" on:change={onSelect} />
				<label for="filter-{option.id}" class="cap">{option.label}</label>
			</div>
		{/each}
	</div>
</details>

<style>
	@property --select-bg-fade-color {
		syntax: "<color>";
		inherits: false;
		initial-value: hsl(323 84% 68%);
	}

	summary {
		cursor: pointer;
		color: var(--color-text-emphasized);
	} summary::marker, summary::-webkit-details-marker {
		display: none;
		content: "";
	} details[open] summary {
		--outline-color: var(--color-bg-medium);
		color: var(--color-text-regular);
		text-shadow:
			0.0625em 0 var(--outline-color),
			-0.0625em 0 var(--outline-color),
			0 0.0625em var(--outline-color),
			0 -0.0625em var(--outline-color),
			0.0625em 0.0625em var(--outline-color),
			0.0625em -0.0625em var(--outline-color),
			-0.0625em 0.0625em var(--outline-color),
			-0.0625em -0.0625em var(--outline-color);
	} details:hover summary {
		color: var(--color-text-regular);
	}

	.menu {
		--bg: oklch(0% 0 0 / 0.85);
		position: absolute;
		inset-block-start: calc(100% + 0.5em);
		inset-inline-start: 50%;
		transform: translateX(-50%);
		width: 300px;
		z-index: 3;
		background: linear-gradient(to right, transparent, var(--bg) 1em, var(--bg) calc(100% - 1em), transparent);
	}

	label {
		display: block;
		padding-block: 0.375em;
		cursor: pointer;
		color: var(--color-text-emphasized-2);
	}

	input:checked + label {
		--select-bg-fade-color: var(--color-selected);
		background: linear-gradient(to right, transparent, var(--select-bg-fade-color) 1em, var(--select-bg-fade-color) calc(100% - 1em), transparent);
		animation: bg-selected-fade var(--anim-selected-cycle);
		color: var(--color-text-regular);
	}

	input:hover + label {
		color: var(--color-text-regular);
	}

	.cap { text-transform: capitalize; }

	@keyframes bg-selected-fade {
		from { --select-bg-fade-color: var(--color-selected); }
		to { --select-bg-fade-color: var(--color-selected-muted); }
	}

	@media (prefers-reduced-motion) {
		input:checked + label {
			animation: none;
		}
	}

	@media screen and (min-width: 800px) {
		/* Neat trick which centers the menu to either the menu item or viewport */
		details {
			position: relative;
		}
	}
</style>