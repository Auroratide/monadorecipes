<script lang="ts">
	import type { PageData } from "./$types";
	import { RecipePage } from "$lib/recipes/RecipePage";

	export let data: PageData
</script>

<RecipePage recipe={data} />
