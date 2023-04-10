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
<main class="{Container()}">
	<slot></slot>
</main>