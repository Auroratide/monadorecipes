<script lang="ts">
	import { Spacing } from "../Spacing"

	export let align: "left" | "center" | "right" = "left"
	export let noSpace: boolean = false
</script>

<td class:no-space={noSpace}>
	<span class="{Spacing.centeredIcon({ alignment: align })}" style="{Spacing.stars(3)}">
		<slot></slot>
	</span>
</td>

<style>
	.no-space {
		padding: 0;
	}
</style>