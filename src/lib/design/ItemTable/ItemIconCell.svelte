<script lang="ts">
	import { Spacing } from "../Spacing"
	import ItemBaseCell from "./ItemBaseCell.svelte"

	export let align: "left" | "center" | "right" = "left"
	export let noSpace: boolean = false
</script>

<ItemBaseCell {noSpace}>
	<span class="{Spacing.centeredIcon({ alignment: align })}" style="{Spacing.stars(3)}">
		<slot></slot>
	</span>
</ItemBaseCell>
