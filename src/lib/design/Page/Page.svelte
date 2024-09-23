<script lang="ts">
	import Header from "./Header.svelte"
	import Footer from "./Footer.svelte"
	import { Container } from "$lib/design/Container"
	import { Backdrop, BackdropScene } from "$lib/design/Backdrop"
	import CookingIcon from "../icons/CookingIcon.svelte"
	import { siteDescription } from "$lib/site-info"

	export let title: string
	export let description: string = siteDescription
	export let backdrop: BackdropScene = BackdropScene.TornaCamp
</script>

<svelte:head>
	<title>{title} | Monado Recipes</title>
	<meta property="description" content={description} />
</svelte:head>

<Backdrop scene={backdrop} />
<Header {title}>
	<slot slot="icon" name="header-icon">
		<CookingIcon />
	</slot>
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
