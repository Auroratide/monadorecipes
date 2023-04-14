<script lang="ts">
	import { Color } from "../Color";
	import { Spacing } from "../Spacing";

	export let href: string | undefined = undefined;
	export let text: string;
</script>

<li>
	{#if href}
		<a {href} class="center-elements">
			<span class="{Color.text.regular()} {Spacing.centeredIcon()}" style="{Spacing.stars(1)}">
				<slot name="icon"></slot>
			</span>
			<span class="{Spacing.centeredLabel()}">
				{text}
			</span>
		</a>
	{:else}
		<span class="center-elements">
			<span class="{Color.text.regular()} {Spacing.centeredIcon()}">
				<slot name="icon"></slot>
			</span>
			<span class="{Spacing.centeredLabel()}">
				{text}
			</span>
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
