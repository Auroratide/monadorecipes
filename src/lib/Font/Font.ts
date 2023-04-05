export type FontOptions = {
	size?: "1-star" | "2-star" | "3-star" | "4-star" | "5-star"
}

export function Font({ size = "2-star" }: FontOptions = {}): string {
	return `font-size-${size}`
}
