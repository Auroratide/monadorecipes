<script lang="ts">
	import { Page } from "$lib/design/Page";
	import { BasicPanel } from "$lib/design/BasicPanel";
	import { Url } from "$lib/Url";
</script>

<Page title="Page not found">
	<BasicPanel>
		<p>Sorry! This page does not seem to exist.</p>
		<p>Return to the <strong><a href="{Url.home()}">list of recipes</a></strong>.</p>
	</BasicPanel>
</Page>
