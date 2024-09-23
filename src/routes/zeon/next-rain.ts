import type { Forecast } from "./forecast"

const ONE_WEEK = 604800000
const DATE_THRESHOLD = ONE_WEEK
const PROBABILITY_THRESHOLD = 0.29

export function findNextRain(forecast: Forecast[]): Forecast | undefined {
	return forecast
		.filter((it) => it.period.start < new Date(Date.now() + DATE_THRESHOLD))
		.find((it) => it.precipitation > PROBABILITY_THRESHOLD)
}
