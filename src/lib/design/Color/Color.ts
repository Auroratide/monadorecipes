type CanBeTranslucent = {
	translucent?: boolean
}

type CanBeFrilled = {
	frilled?: boolean
}

type CanBeOutset = {
	outset?: boolean,
}

type CanBeOnFocus = {
	onFocus?: boolean,
}

export const Color = {
	text: {
		regular: () => "color-text-regular",
		muted: () => "color-text-muted",
		emphasized: () => "color-text-emphasized",
		dark: (options: CanBeOnFocus = {}) => `color-text-dark${options.onFocus ? " color-text-dark-focus" : ""}`,
	},
	background: {
		dark: (options: CanBeTranslucent & CanBeFrilled = {}) => `color-bg-dark${options.translucent ? " color-bg-translucent" : ""}${options.frilled ? " color-bg-frilled" : ""}`,
		medium: () => "color-bg-medium",
		light: (options: CanBeTranslucent = {}) => `color-bg-light${options.translucent ? " color-bg-translucent" : ""}`,
		banner: (options: CanBeTranslucent = {}) => `color-bg-banner${options.translucent ? " color-bg-translucent" : ""}`,
		shiny: (options: CanBeTranslucent = {}) => `color-bg-shiny${options.translucent ? " color-bg-translucent" : ""}`,
		darkShiny: () => "color-bg-dark-shiny",
	},
	border: {
		regular: () => "color-border-regular",
		muted: () => "color-border-muted",
		dark: (options: CanBeOutset = {}) => `color-border-dark${options.outset ? " color-border-outset" : ""}`,
		selected: () => "color-border-selected",
	},
	icon: {
		common: () => "color-icon-common",
		uncommon: () => "color-icon-uncommon",
		rare: () => "color-icon-rare",
	},
	valueOf: (colorClass: string) => `var(--${colorClass})`,
}
