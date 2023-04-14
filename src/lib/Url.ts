import { base } from "$app/paths"

const slash = (str: string) => (str ? `/${str}` : '')

export const Api = (url: string) => `${url}.json`

export const Url = {
	home: () => `${base}/`,
	recipes: (id = '') => `${base}${slash("recipes")}${slash(id)}`,
}

export const External = {
	source: "https://github.com/Auroratide/monadorecipes",
} as const
