<script lang="ts">
	import type { OpenGraph } from "./OpenGraph"

	export let value: OpenGraph
</script>

<svelte:head>
	<meta property="og:title" content={value.title} />
	<meta property="og:description" content={value.description} />
	<meta property="og:image" content={value.image} />
	<meta property="og:url" content={value.url} />
	<meta property="og:site_name" content={value.siteName} />
</svelte:head>
