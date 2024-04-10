<script lang="ts">
	import { uniqueId } from "../unique-id"

	const gradient = uniqueId()
	const stops = uniqueId()
</script>

<svg class="overlap-left" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="83.95" height="267.467" viewBox="0 0 22.212 70.767">
	<defs>
		<linearGradient xlink:href="#{stops}" id="{gradient}" x1="18.805" x2="36.772" y1="177.669" y2="181.387" gradientTransform="translate(86.404 -9.926)" gradientUnits="userSpaceOnUse"/>
		<linearGradient id="{stops}">
			<stop offset="0" style="stop-color:#fff;stop-opacity:1"/>
			<stop offset=".515" style="stop-color:#99b6e7;stop-opacity:1"/>
		</linearGradient>
	</defs>
	<path d="M116.05 134.761c-1.236-.004-2.374.163-3.255.506-2.823 1.098-4.08 3.409-4.08 6.528v21.296l-6.137 6.137v1.333l6.137 6.136v21.297c0 3.119 1.257 5.429 4.08 6.527 2.822 1.098 8.265.384 11.152-1.907-3.641-.631-6.497-2.597-6.497-4.765V176.48l5.92-5.92v-1.332l-5.92-5.92v-21.37c0-2.167 2.856-4.132 6.497-4.764-1.985-1.575-5.178-2.405-7.897-2.413z" style="fill:url(#{gradient});fill-opacity:1;stroke:#29328e;stroke-width:1.5;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1" transform="translate(-102.328 -134.511)"/>
</svg>

<style>
	svg {
		display: block;
		width: auto;
		height: 110%;
		filter: drop-shadow(0 0 0.0625pc var(--color-bg-medium));
		overflow: visible;
	}

	.overlap-left {
		position: absolute;
		inset-block: -5%;
		inset-inline-start: 0;
		transform: translateX(-55%);
		pointer-events: none;
	}
</style>