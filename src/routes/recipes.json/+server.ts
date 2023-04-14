import type { RequestHandler } from "@sveltejs/kit"
import { getAllRecipes } from "$data"

export const GET: RequestHandler = async () => {
	const recipes = await getAllRecipes()

	return new Response(JSON.stringify({
		items: recipes,
	}), {
		status: 200,
	})
}
