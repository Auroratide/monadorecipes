<script lang="ts">
	import { FooterBar, FooterItem } from "../FooterBar";
	import GithubIcon from "../icons/GithubIcon.svelte";
	import { Url, External } from "$lib/Url";
</script>

<FooterBar>
	<FooterItem href="{Url.legalDisclaimers()}" text="Legal Disclaimers" />
	<FooterItem href="{External.source}" text="Open source">
		<GithubIcon slot="icon" />
	</FooterItem>
</FooterBar>
