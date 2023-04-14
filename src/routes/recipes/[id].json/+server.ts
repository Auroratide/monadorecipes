import type { RequestHandler } from "@sveltejs/kit"
import { getAllRecipes } from "$data"

export const GET: RequestHandler = async ({ params }) => {
	const recipes = await getAllRecipes()
	const recipe = recipes.find(recipe => recipe.id === params.id)

	if (recipe) {
		return new Response(JSON.stringify(recipe), { status: 200 })
	} else {
		return new Response(JSON.stringify({ message: "Recipe not found" }), { status: 404 })
	}
}
