<script lang="ts">
	import { FooterBar, FooterItem } from "../FooterBar";
	import GithubIcon from "../icons/GithubIcon.svelte";
	import BookIcon from "../icons/BookIcon.svelte";
	import { Url, External } from "$lib/Url";
</script>

<FooterBar>
	<FooterItem href="{Url.legalDisclaimers()}" text="Legal Disclaimers">
		<BookIcon slot="icon" />
	</FooterItem>
	<FooterItem href="{External.source}" text="Open source">
		<GithubIcon slot="icon" />
	</FooterItem>
</FooterBar>
