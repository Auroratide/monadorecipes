export type ElevatedOptions = {
	useFilter?: boolean,
}

export const Elevated = ({
	useFilter = false,
}: ElevatedOptions = {}) => `elevated${useFilter ? " elevated-use-filter" : ""}`
