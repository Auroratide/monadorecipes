<script lang="ts">
	import { FooterBar, FooterItem } from "../FooterBar";
	import GithubIcon from "../icons/GithubIcon.svelte";
	import { External } from "$lib/Url";
</script>

<FooterBar>
	<FooterItem href="{External.source}" text="Open source">
		<GithubIcon slot="icon" />
	</FooterItem>
</FooterBar>
