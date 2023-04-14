export const Font = {
	size: {
		stars: (n: 1 | 2 | 3 | 4 | 5 = 2) => `font-size-${n}-star`,
		largeIcon: () => "font-size-large-icon",
	},
	shadowed: () => "font-shadowed",
}
