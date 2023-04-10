<script lang="ts">
	export let align: "left" | "center" | "right" = "left";
</script>

<td class="{align}">
	<slot></slot>
</td>

<style>
	td {
		padding: 0.375em 1.5em;
		line-height: 1;
	}

	.left { text-align: left; }
	.center { text-align: center; }
	.right { text-align: right; }
</style>
