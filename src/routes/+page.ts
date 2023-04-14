import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { Api, Url } from "$lib/Url"

export const load: PageLoad = async ({ fetch }) => {
	return fetch(Api(Url.recipes())).then((res) => {
		if (res.ok) {
			return res.json()
		} else {
			throw error(500, "Could not fetch recipes")
		}
	})
}
