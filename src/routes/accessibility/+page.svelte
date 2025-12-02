<script lang="ts">
	import { BasicPanel } from "$lib/design/BasicPanel"
	import { Font } from "$lib/design/Font"
	import { Page } from "$lib/design/Page"
	import { TitledPanel } from "$lib/design/TitledPanel"
	import BookIcon from "$lib/design/icons/BookIcon.svelte"
</script>

<Page title="Accessibility Statement">
	<BookIcon slot="header-icon" />
	<div style:view-transition-name="accessibility">
		<div style:margin-block-end="1em">
			<BasicPanel>
				<div class="{Font.size.stars(2)}">
					<p>The Internet is for all people, not just some people. As such, it is both my aspiration and my duty to make this website and all my products as accessible to everyone as possible, regardless of ability. Whether it be articles, videos, games, or whatever it is I even make, I want everyone to feel included.</p>
					<p>To that end, I devote time to studying and applying good accessibility practices. Some of the things I do include:</p>
					<ul>
						<li>Reading established guidelines and standards, and evaluating my content against them.</li>
						<li>Testing every widget and article in a variety of conditions (for example, using a screen reader or foregoing a mouse).</li>
						<li>Providing at least two ways of accessing content (what I call the principle of engaging two senses).</li>
						<li>Only utilizing third-party components which themselves consider accessibility.</li>
					</ul>
				</div>
			</BasicPanel>
		</div>
		<TitledPanel title="Conformance">
			<p>The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. My website is partially conformant with WCAG 2.1 Level AA, meaning some parts of the website may not fully conform to the standard.</p>
			<p>Partial compliance is due to the WCAG being a large and verbose standard. As a single person, I do what I can to meet as many of its principles as possible.</p>
		</TitledPanel>
		<TitledPanel title="Feedback">
			<p>I am very open to discourse about improving the accessibility of anything I do! If anything hinders you using this site, please let me know.</p>
			<p><strong><a href="https://github.com/Auroratide/monadorecipes/issues/new">Leave me a note</a></strong>, and I will definitely look into it!</p>
		</TitledPanel>
	</div>
</Page>
