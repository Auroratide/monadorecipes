<script lang="ts">
	import { Font } from "$lib/design/Font"
	import { Url } from "$lib/Url"
	import Header from "./Header.svelte"

	export let title: string;
</script>

<svelte:head>
	<title>{title} | Monado Recipes</title>
</svelte:head>

<Header {title} />
<main>
	<slot></slot>
</main>