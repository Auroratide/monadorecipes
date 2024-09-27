<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import BookIcon from "$lib/design/icons/BookIcon.svelte"
</script>

<Page title="Legal Disclaimers">
	<BookIcon slot="header-icon" />
	<div style:view-transition-name="legal">
		<TitledPanel title="Fair Use Notice">
			<p>This site may make use of copyrighted material the use of which has not always been specifically authorized by the copyright owner.</p>
			<p>This constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law. In accordance with Title 17 U.S.C. Section 107, the material on this site is offered publicly and without profit, to the public users of the internet for comment and nonprofit educational and informational purposes.</p>
			<p>Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted. No copyright(s) is/are claimed.</p>
			<p>The site owner gains no profit from posted content, so it falls under "Fair Use" guidelines.</p>
		</TitledPanel>
		<TitledPanel title="Privacy Policy">
			<p>We do not share personal information with third-parties nor do we store information we collect about your visit to this site for use other than to analyze content performance through the use of cookies, which you can turn off at anytime by modifying your internet browser's settings. We are not responsible for the republishing of the content found on this site on other websites or media without our permission. This privacy policy is subject to change without notice.</p>
		</TitledPanel>
	</div>
</Page>
