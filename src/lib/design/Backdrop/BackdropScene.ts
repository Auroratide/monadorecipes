import Titans from "./titans.webp"
import TornaCamp from "./torna-camp.png?format=webp"

export const BackdropScene = {
	Titans,
	TornaCamp,
} as const
export type BackdropScene = typeof BackdropScene[keyof typeof BackdropScene]
