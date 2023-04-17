import { Elevated } from "../Elevated"
import { Spacing } from "../Spacing"

export const Button = () => `button ${Elevated({ useFilter: true })} ${Spacing.centeredLabel()}`
