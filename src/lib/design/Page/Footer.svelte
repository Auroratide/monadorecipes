<script lang="ts">
	import { FooterBar, FooterItem } from "../FooterBar";
	import CookingIcon from "../icons/CookingIcon.svelte";
	import GithubIcon from "../icons/GithubIcon.svelte";
	import BookIcon from "../icons/BookIcon.svelte";
	import { Url, External } from "$lib/Url";
</script>

<FooterBar>
	<FooterItem href="{Url.about()}" text="About">
		<CookingIcon slot="icon" />
	</FooterItem>
	<FooterItem href="{Url.legalDisclaimers()}" text="Legal Disclaimers">
		<BookIcon slot="icon" />
	</FooterItem>
	<FooterItem href="{External.source}" text="Open source">
		<GithubIcon slot="icon" />
	</FooterItem>
	<FooterItem printOnly href="{Url.home()}" text="Recipe by monado.recipes">
		<CookingIcon slot="icon" />
	</FooterItem>
</FooterBar>
