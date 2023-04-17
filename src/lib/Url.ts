import { base } from "$app/paths"

const slash = (str: string) => (str ? `/${str}` : '')

export const Api = (url: string) => `${url}.json`

export const Url = {
	home: () => `${base}/`,
	recipes: (id = '') => `${base}${slash("recipes")}${slash(id)}`,
	legalDisclaimers: () => `${base}${slash("legal-disclaimers")}`,
} as const

export const External = {
	source: "https://github.com/Auroratide/monadorecipes",
	feedback: (recipeName: string) => `https://docs.google.com/forms/d/e/1FAIpQLSfLOkLIR_d8yebtq12OzKP1Uf1Zux0x7Kg-gIHcslhuw0hzrA/viewform?usp=pp_url&entry.1258368236=${encodeURIComponent(recipeName)}`,
} as const
