<script lang="ts">
	import { uniqueId } from "../unique-id"

	const gradient = uniqueId()
	const stops = uniqueId()
</script>

<svg class="overlap-right" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="83.95" height="267.467" viewBox="0 0 22.212 70.767">
	<defs>
		<linearGradient xlink:href="#{stops}" id="{gradient}" x1="36.239" x2="15.851" y1="178.645" y2="181.945" gradientTransform="matrix(-1 0 0 1 134 -51.456)" gradientUnits="userSpaceOnUse"/>
		<linearGradient id="{stops}">
			<stop offset="0" style="stop-color:#fff;stop-opacity:1"/>
			<stop offset=".515" style="stop-color:#99b6e7;stop-opacity:1"/>
		</linearGradient>
	</defs>
	<path d="M104.354 93.23c1.236-.003 2.374.164 3.256.507 2.822 1.098 4.08 3.408 4.08 6.527v21.296l6.136 6.137v1.333l-6.136 6.136v21.297c0 3.12-1.258 5.43-4.08 6.527-2.822 1.099-8.266.384-11.153-1.906 3.642-.632 6.497-2.598 6.497-4.766V134.95l-5.92-5.92v-1.333l5.92-5.92v-21.369c0-2.168-2.855-4.133-6.497-4.764 1.985-1.575 5.178-2.405 7.897-2.413z" style="fill:url(#{gradient});fill-opacity:1;stroke:#29328e;stroke-width:1.5;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1" transform="translate(-95.864 -92.98)"/>
</svg>

<style>
	svg {
		display: block;
		width: auto;
		height: 110%;
		filter: drop-shadow(0 0 0.0625pc var(--color-bg-medium));
		overflow: visible;
	}

	.overlap-right {
		position: absolute;
		inset-block: -5%;
		inset-inline-end: 0;
		transform: translateX(55%);
		pointer-events: none;
	}
</style>