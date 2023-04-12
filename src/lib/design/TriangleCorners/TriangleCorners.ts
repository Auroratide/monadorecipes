export type TriangleCornersOptions = {
	type?: "both" | "right"
}

export const TriangleCorners = ({
	type = "both"
}: TriangleCornersOptions) => `triangle-corners triangle-corners-${type}`
