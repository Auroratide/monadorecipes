import Titans from "./titans.webp"
import TornaCamp from "./torna-camp.png?format=webp"
import Zeon from "./zeon.webp"

export const BackdropScene = {
	Titans,
	TornaCamp,
	Zeon,
} as const
export type BackdropScene = typeof BackdropScene[keyof typeof BackdropScene]
