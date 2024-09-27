<script lang="ts">
	import { onMount } from "svelte"
	import { onNavigate } from "$app/navigation"
	import { prefersReducedMotion } from "$lib/media"

	onMount(() => {
		import("@auroratide/img-zoom/lib/define.js")
	})

	onNavigate((navigation) => {
		if (!document.startViewTransition) return
		if (prefersReducedMotion()) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<slot></slot>
