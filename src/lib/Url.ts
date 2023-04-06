import { base } from "$app/paths"

export const Url = {
	home: () => `/${base}`,
	recipes: (id = '') => `/${base}/recipes/${id}`,
}
