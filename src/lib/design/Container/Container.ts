export const Container = () => "container"

export type ContainerPaddingOptions = {
	side: "left" | "right",
}

export const ContainerPadding = ({
	side,
}: ContainerPaddingOptions) => `container-padding-${side}`
