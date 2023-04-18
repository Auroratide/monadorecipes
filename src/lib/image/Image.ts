/**
 * Small versions should be 600w
 */
export type Image = {
	sources: {
		[format: string]: {
			src: string,
			w: number,
		}[],
	},
	fallback: {
		src: string,
		w: number,
		h: number,
	},
}

export type WithAlt = {
	alt: string,
}
