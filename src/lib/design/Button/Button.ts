import { Elevated } from "../Elevated"
import { Spacing } from "../Spacing"
import { TriangleCorners } from "../TriangleCorners"

export const Button = () => `button ${Elevated({ useFilter: true })} ${Spacing.centeredLabel()} ${TriangleCorners({ type: "both" })}`
