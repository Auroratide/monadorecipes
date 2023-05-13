export type BorderedSidesOptions = {
	top?: boolean,
	right?: boolean,
	bottom?: boolean,
	left?: boolean,
}

export const Bordered = ({
	top = false,
	right = false,
	bottom = false,
	left = false,
}: BorderedSidesOptions = {
	top: true,
	right: true,
	bottom: true,
	left: true,
}) => `bordered${top ? " bordered-top" : ""}${right ? " bordered-right" : ""}${bottom ? " bordered-bottom" : ""}${left ? " bordered-left" : ""}`