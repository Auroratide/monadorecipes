import type { OpenGraph } from "./OpenGraph"
import { Absolute } from "$lib/Url"
import { siteDescription } from "$lib/site-info"

export const buildOpenGraph = (values: Omit<OpenGraph, "siteName" | "url" | "description" | "type"> & Partial<OpenGraph> & { relativeUrl: string }): OpenGraph => ({
	siteName: "Monado Recipes",
	url: Absolute(values.relativeUrl),
	description: siteDescription,
	type: "website",
	...values,
})
