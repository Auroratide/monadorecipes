<script lang="ts">
	import type { BackdropScene } from "./BackdropScene";

	export let scene: BackdropScene;
</script>

<div class="backdrop" aria-hidden="true" style:--url="url({scene})"></div>

<style>
	.backdrop {
		background-image: var(--url);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		pointer-events: none;
	}

	@media print {
		.backdrop {
			display: none;
		}
	}
</style>
