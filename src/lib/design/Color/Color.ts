type CanBeTranslucent = {
	translucent?: boolean
}

export const Color = {
	text: {
		regular: () => "color-text-regular",
		muted: () => "color-text-muted",
	},
	background: {
		dark: (options: CanBeTranslucent = {}) => `color-bg-dark${options.translucent ? " color-bg-translucent" : ""}`,
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
