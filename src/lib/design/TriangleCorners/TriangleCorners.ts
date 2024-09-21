export type TriangleCornersOptions = {
	type?: "both" | "right" | "left" | "custom"
}

export const TriangleCorners = ({
	type = "both",
}: TriangleCornersOptions) => `triangle-corners triangle-corners-${type}`
