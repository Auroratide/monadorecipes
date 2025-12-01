<script lang="ts">
	import { FooterBar, FooterItem } from "../FooterBar"
	import CookingIcon from "../icons/CookingIcon.svelte"
	import StapleIcon from "../icons/StapleIcon.svelte"
	import GithubIcon from "../icons/GithubIcon.svelte"
	import BookIcon from "../icons/BookIcon.svelte"
	import AuroratideIcon from "../icons/AuroratideIcon.svelte"
	import { Url, External } from "$lib/Url"
</script>

<FooterBar>
	<svelte:fragment slot="left">
		<FooterItem href="{Url.home()}" text="Monado Recipes">
			<CookingIcon slot="icon" />
		</FooterItem>
		<FooterItem href="https://auroratide.com" text="Made by Auroratide">
			<AuroratideIcon slot="icon" />
		</FooterItem>
	</svelte:fragment>
	<svelte:fragment slot="right">
		<FooterItem href="{Url.about()}" text="About">
			<StapleIcon slot="icon" />
		</FooterItem>
		<FooterItem href="{Url.legalDisclaimers()}" text="Legal">
			<BookIcon slot="icon" />
		</FooterItem>
		<FooterItem href="{External.source}" text="Open source">
			<GithubIcon slot="icon" />
		</FooterItem>
		<FooterItem printOnly href="{Url.home()}" text="Recipe by monado.recipes">
			<CookingIcon slot="icon" />
		</FooterItem>
	</svelte:fragment>
</FooterBar>
