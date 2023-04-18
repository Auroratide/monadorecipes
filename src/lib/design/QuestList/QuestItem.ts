import type { Image } from "$lib/image/Image"

export type QuestItem = {
	id: string,
	image: Pick<Image, "sources" | "fallback">,
	name: string,
}
