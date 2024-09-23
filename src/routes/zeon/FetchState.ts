import type { Forecast } from "./forecast"

export type FetchState = {
	state: "Pending",
} | {
	state: "Fetching",
} | {
	state: "Rain",
	forecast: Forecast,
} | {
	state: "No Rain",
} | {
	state: "Error",
	message: string,
}

export const FetchState = {
	Pending: () => ({ state: "Pending" }),
	Fetching: () => ({ state: "Fetching" }),
	Rain: (forecast: Forecast) => ({ state: "Rain", forecast }),
	NoRain: () => ({ state: "No Rain" }),
	Error: (message: string) => ({ state: "Error", message }),
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, (args: any) => FetchState>
