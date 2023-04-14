import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { Url, Api } from "$lib/Url"
import type { Recipe } from "$lib/recipes/Recipe"

export const load: PageLoad = async ({ fetch, params }) => {
	return fetch(Api(Url.recipes(params.id))).then((res) => {
		if (res.ok) {
			return res.json() as Promise<Recipe>
		} else {
			throw error(404, "Recipe not found")
		}
	})
}
