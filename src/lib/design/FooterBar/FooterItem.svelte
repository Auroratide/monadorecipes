<script lang="ts">
	import { Color } from "../Color";
	export let href: string | undefined = undefined;
</script>

<li>
	{#if href}
		<a {href} class="center-elements">
			<span class="{Color.text.regular()}">
				<slot name="icon"></slot>
			</span>
			<slot></slot>
		</a>
	{:else}
		<span class="center-elements">
			<span class="{Color.text.regular()}">
				<slot name="icon"></slot>
			</span>
			<slot></slot>
		</span>
	{/if}
</li>

<style>
	a {
		text-decoration: none;
	}

	.center-elements {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 1;
		gap: 0.5em;
	}
</style>
