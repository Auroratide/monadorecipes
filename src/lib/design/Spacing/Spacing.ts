export type Alignment = {
	alignment?: "left" | "right" | "center"
}

export const Spacing = {
	centeredLabel: ({
		alignment = "center",
	}: Alignment = {}) => `spacing-centered-label spacing-centered-label-${alignment}`,
	centeredIcon: ({
		alignment = "center",
	}: Alignment = {}) => `spacing-centered-icon spacing-centered-icon-${alignment}`,
	stars: (n: 0 | 1 | 2 | 3 | 4 | 5 = 2) => `--spacing-stars: var(--spacing-stars-${n});`,
	panel: () => "spacing-panel",
	after: () => "spacing-after",
} as const
