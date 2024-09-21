<script lang="ts">
	import { TriangleCorners } from "../TriangleCorners"

	export let noSpace: boolean = false
</script>

<td class:no-space={noSpace} class="{TriangleCorners({ type: "custom" })} inner-shadow">
	<slot></slot>
</td>

<style>
	td {
		--border-width: -0.065em;
		overflow: visible;
		position: relative;
		isolation: isolate;
		padding-inline: 0.5em;
		line-height: 1;
	} td::before, td::after {
		content: "";
		display: block;
		position: absolute;
	} td::before {
		inset: 0 var(--border-width);
		background: var(--color-bg-medium);
		box-shadow: 0 1.125em 0.375em -1.25em oklch(0% 0 0) inset;
		z-index: -1;
	} td::after {
		inset: var(--border-width);
		background: var(--color-border-dark);
		z-index: -2;
	}

	td:first-child {
		padding-inline-start: 1.5em;
	} td:first-child::before {
		inset: 0 var(--border-width) 0 0;
	} td:first-child::before, td:first-child::after {
		clip-path: var(--triangle-corners-left);
	}

	td:last-child {
		padding-inline-end: 1.5em;
	} td:last-child::before {
		inset: 0 0 0 var(--border-width);
	} td:last-child::before, td:last-child::after {
		clip-path: var(--triangle-corners-right);
	}

	.no-space { padding: 0; }
</style>