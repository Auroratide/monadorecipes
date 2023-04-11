<script lang="ts">
	import Header from "./Header.svelte"
	import { Container } from "$lib/design/Container"
	import { Backdrop } from "$lib/design/Backdrop"

	export let title: string;
</script>

<svelte:head>
	<title>{title} | Monado Recipes</title>
</svelte:head>

<Backdrop />
<Header {title} />
<main class="{Container()} pad-block">
	<slot></slot>
</main>

<style>
	.pad-block {
		padding-block: 2rem;
	}
</style>