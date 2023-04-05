<script lang="ts">
	import { Font } from "$lib/design/Font"

	export let title: string
</script>

<section>
	<h2 class="{Font()}">{title}</h2>
	<slot></slot>
</section>
