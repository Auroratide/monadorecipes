<script lang="ts">
	import { Color } from "../Color"
	import { Container } from "../Container"
	import { Bordered } from "../Bordered"
	import { Font } from "../Font"
</script>

<footer class="{Font.size.stars(1)} {Color.text.emphasized()} {Color.background.banner({ translucent: true })} {Color.border.dark()} {Bordered({ top: true })} fixed-to-bottom padded">
	<div class="{Container()} even-row">
		<ul class="horizontal-list">
			<slot name="left"></slot>
		</ul>
		<ul class="horizontal-list">
			<slot name="right"></slot>
		</ul>
	</div>
</footer>

<style>
	.padded {
		padding-block: 0.25em;
	}

	.even-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.even-row > * {
		flex: 1;
	}

	.horizontal-list {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 1em;
		row-gap: 0.25em;
	}

	.horizontal-list:first-child { justify-content: flex-start; }
	.horizontal-list:last-child { justify-content: flex-end; }

	.fixed-to-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>