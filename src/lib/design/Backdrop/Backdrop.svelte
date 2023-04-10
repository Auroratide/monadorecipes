<script lang="ts">
	import TornaCamp from "./torna-camp.png";
</script>

<div class="backdrop" aria-hidden="true" style:--url="url({TornaCamp})"></div>

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
</style>
