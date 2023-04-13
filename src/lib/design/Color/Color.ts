type CanBeTranslucent = {
	translucent?: boolean
}

export const Color = {
	text: {
		regular: () => "color-text-regular",
		muted: () => "color-text-muted",
		emphasized: () => "color-text-emphasized",
		dark: () => "color-text-dark",
	},
	background: {
		dark: (options: CanBeTranslucent = {}) => `color-bg-dark${options.translucent ? " color-bg-translucent" : ""}`,
		medium: () => "color-bg-medium",
		light: (options: CanBeTranslucent = {}) => `color-bg-light${options.translucent ? " color-bg-translucent" : ""}`,
		banner: () => "color-bg-banner",
		shiny: (options: CanBeTranslucent = {}) => `color-bg-shiny${options.translucent ? " color-bg-translucent" : ""}`,
	},
	border: {
		regular: () => "color-border-regular",
		muted: () => "color-border-muted",
		dark: () => "color-border-dark",
		selected: () => "color-border-selected",
	},
	icon: {
		common: () => "color-icon-common",
		uncommon: () => "color-icon-uncommon",
		rare: () => "color-icon-rare",
	},
	valueOf: (colorClass: string) => `var(--${colorClass})`,
}
