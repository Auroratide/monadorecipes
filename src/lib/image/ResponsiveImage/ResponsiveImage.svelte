<script lang="ts">
	import type { Image } from '../Image';

	export let image: Image;
	export let alt: string;
</script>

<picture>
	{#each Object.entries(image.sources) as [format, images]}
		<source srcset="{images.map(i => `${i.src} ${i.w}w`).join(", ")}" type="image/{format}" />
	{/each}
	<img src="{image.fallback.src}" {alt} />
</picture>

<style>
	picture, img {
		display: block;
		max-width: 100%;
	}
</style>
