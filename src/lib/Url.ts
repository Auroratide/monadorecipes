import { base } from "$app/paths"

const slash = (str: string) => (str ? `/${str}` : '')

export const Api = (url: string) => `${url}.json`

export const Url = {
	home: () => `${slash(base)}/`,
	recipes: (id = '') => `${slash(base)}${slash("recipes")}${slash(id)}`,
}
