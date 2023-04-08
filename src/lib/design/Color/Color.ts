export const Color = {
	text: {
		regular: () => "color-text-regular",
		muted: () => "color-text-muted",
	},
	background: {
		dark: () => "color-bg-dark",
		banner: () => "color-bg-banner",
	},
	border: {
		regular: () => "color-border-regular",
		muted: () => "color-border-muted",
		dark: () => "color-border-dark",
	},
	icon: {
		common: () => "color-icon-common",
		uncommon: () => "color-icon-uncommon",
		rare: () => "color-icon-rare",
	},
	valueOf: (colorClass: string) => `var(--${colorClass})`,
}
