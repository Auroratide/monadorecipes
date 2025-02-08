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
			<p><strong>Effective Date</strong>: <time datetime="2025-02-08">08 Feb 2025</time></p>
			<p>Monado Recipes ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you visit our website.</p>
			<h3>Information We Do Not Collect</h3>
			<ul>
				<li>We do not collect, store, or share any personal data.</li>
				<li>We do not use cookies or tracking technologies.</li>
				<li>We do not log any information about your visit, including IP addresses, browser details, or browsing history.</li>
			</ul>
			<h3>Hosting and Third-Party Data Collection</h3>
			<p>Our website is hosted on GitHub Pages. While we do not collect any personal data, GitHub may log visitor information such as IP addresses and browser details as part of their standard hosting operations. For more details, please refer to <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">GitHub’s Privacy Policy</a>.</p>
			<h3>Your Privacy</h3>
			<p>Because we do not collect any personal data, there is no data to access, modify, or delete. If you have any concerns, you may contact us at <a href="mailto:tf.auroratide@gmail.com">tf.auroratide@gmail.com</a>.</p>
			<h3>Changes to This Policy</h3>
			<p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated effective date.</p>
		</TitledPanel>
	</div>
</Page>
