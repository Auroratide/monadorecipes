<script lang="ts">
	import { Spacing } from "../Spacing"
	import ItemBaseCell from "./ItemBaseCell.svelte"

	export let align: "left" | "center" | "right" = "left"
</script>

<ItemBaseCell>
	<span class="{Spacing.centeredLabel({ alignment: align })}" style="{Spacing.stars(3)}">
		<slot></slot>
	</span>
</ItemBaseCell>
