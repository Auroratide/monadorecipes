<script lang="ts">
	import Header from "./Header.svelte"
	import Footer from "./Footer.svelte"
	import { Container } from "$lib/design/Container"
	import { Backdrop, BackdropScene } from "$lib/design/Backdrop"

	export let title: string;
</script>

<svelte:head>
	<title>{title} | Monado Recipes</title>
</svelte:head>

<Backdrop scene={BackdropScene.TornaCamp} />
<Header {title}>
	<slot slot="icon" name="header-icon"></slot>
</Header>
<main class="{Container()} pad-block">
	<slot></slot>
</main>
<Footer />

<style>
	.pad-block {
		padding-block: 2rem;
	}
</style>
