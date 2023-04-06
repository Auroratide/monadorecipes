<script lang="ts">
	import { Font } from "$lib/design/Font"

	export let title: string;
</script>

<section>
	<h2 class="{Font.size.stars(3)}">{title}</h2>
	<div>
		<slot></slot>
	</div>
</section>
