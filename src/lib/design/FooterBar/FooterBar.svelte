<script lang="ts">
	import { Color } from "../Color"
	import { Container } from "../Container"
	import { Font } from "../Font"
</script>

<footer class="{Font.size.stars(1)} {Color.text.emphasized()} {Color.background.banner({ translucent: true })} shadowed fixed-to-bottom padded" style:view-transition-name="footer">
	<div class="{Container()} even-row">
		<ul class="vertical-list left lg:horizontal-list">
			<slot name="left"></slot>
		</ul>
		<ul class="vertical-list right lg:horizontal-list">
			<slot name="right"></slot>
		</ul>
	</div>
</footer>
<div class="footer-space">
	<!-- Occupy space footer would have taken -->
</div>

<style>
	.padded {
		padding-block: 0.25em;
	}

	.even-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
	}

	.even-row > * {
		flex: 1;
	}

	.vertical-list {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		column-gap: 1em;
		row-gap: 0.25em;
	} .vertical-list.left {
		align-items: flex-start;
		justify-content: space-between;
	} .vertical-list.right {
		align-items: flex-end;
	}

	.fixed-to-bottom {
		inline-size: 100%;
	}

	.shadowed {
		box-shadow: 0 0 0.2em var(--color-bg-light);
	}

	@media screen and (min-width: 800px) {
		.fixed-to-bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
		}

		.footer-space { block-size: 1em; }

		.lg\:horizontal-list {
			list-style: none;
			padding: 0;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			column-gap: 1em;
			row-gap: 0.25em;
		}

		.lg\:horizontal-list:first-child { justify-content: flex-start; }
		.lg\:horizontal-list:last-child { justify-content: flex-end; }
	}
</style>