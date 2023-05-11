import type { Recipe } from "$lib/recipes/Recipe"
import * as fs from "fs/promises"

const importOne = (file: string): Promise<{ default: Recipe }> =>
	import(`./recipes/${file}/index.ts`)

export const getAllRecipes = (): Promise<Recipe[]> => {
	return fs.readdir("./src/data/recipes")
		.then(files => files.filter(file => file !== ".DS_Store"))
		.then(files => Promise.all(files.map(importOne)))
		.then(imported => imported.map(recipe => recipe.default))
}
