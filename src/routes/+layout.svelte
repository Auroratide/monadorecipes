<script lang="ts">
	import { onMount } from "svelte"

	onMount(() => {
		import("@auroratide/img-zoom/lib/define.js")
	})
</script>

<slot></slot>
