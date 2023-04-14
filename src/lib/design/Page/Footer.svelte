<script lang="ts">
	import { FooterBar, FooterItem } from "../FooterBar";
	import GithubIcon from "../icons/GithubIcon.svelte";
	import { External } from "$lib/Url";
</script>

<FooterBar>
	<FooterItem href="{External.source}">
		<GithubIcon slot="icon" />
		<span>Open Source</span>
	</FooterItem>
</FooterBar>
