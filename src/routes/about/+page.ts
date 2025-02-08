import type { PageLoad } from "./$types"
import { Url, Api } from "$lib/Url"
import type { Recipe } from "$lib/recipes/Recipe"

export const load: PageLoad = async ({ fetch }) => {
	const favorites = ["acqua-pearl-pazza", "glitterbake", "mananas-battle-soup"]

	return await Promise.all(favorites
		.map((it) => fetch(Api(Url.recipes(it)))),
	).then((res) => Promise.all(res.map((it) => {
		if (it.ok) {
			return it.json() as Promise<Recipe>
		} else {
			return undefined
		}
	}))).then((resolved) =>
		resolved.filter((it) => it != null),
	).then((recipes) => ({
		favoriteRecipes: recipes,
	}))
}
