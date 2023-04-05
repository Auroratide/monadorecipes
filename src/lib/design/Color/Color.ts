export const Color = {
	text: {
		regular: () => "color-text-regular",
		muted: () => "color-text-muted",
	},
	background: {
		dark: () => "color-bg-dark",
	},
	border: {
		regular: () => "color-border-regular",
	},
	icon: {
		common: () => "color-icon-common",
		uncommon: () => "color-icon-uncommon",
		rare: () => "color-icon-rare",
	},
	valueOf: (colorClass: string) => `var(--${colorClass})`,
}
