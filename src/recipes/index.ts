import { parseRecipe } from "./parser"

type RecipeModule = {
	html: string,
	attributes: Record<string, unknown>,
}

export async function getAllRecipes() {
	const modules = await import.meta.glob("./*/recipe.md")

	const recipes = []

	for (const path in modules) {
		const promise = modules[path]().then(async (module) => {
			const { html, attributes } = module as RecipeModule

			const id = path.match(/\.\/(.+?)\/recipe\.md/)![1]

			const image = await import(`./${id}/main.png?w=600;1600&format=webp;png&picture`)
			const recipe = parseRecipe(html, attributes, image.default)

			return recipe
		})

		recipes.push(promise)
	}

	return Promise.all(recipes)
}