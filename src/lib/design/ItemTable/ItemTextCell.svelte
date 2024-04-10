<script lang="ts">
	import { Spacing } from "../Spacing"

	export let align: "left" | "center" | "right" = "left"
</script>

<td>
	<span class="{Spacing.centeredLabel({ alignment: align })}" style="{Spacing.stars(3)}">
		<slot></slot>
	</span>
</td>
