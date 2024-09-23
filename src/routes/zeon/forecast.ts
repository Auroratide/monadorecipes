import type { Location } from "./location"

export type Forecast = {
	name: string,
	period: {
		start: Date,
		end: Date,
	},
	precipitation: number,
}

export async function getForecast({ latitude, longitude }: Location): Promise<Forecast[]> {
	const forecastUrl = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
		.then((res) => res.json())
		.then((res: NwsPointResponse) => res.properties.forecast)

	const periods = await fetch(forecastUrl)
		.then((res) => res.json())
		.then((res: NwsForecastResponse) => res.properties.periods)
	
	return periods.map((period) => ({
		name: period.name,
		period: {
			start: new Date(period.startTime),
			end: new Date(period.endTime),
		},
		precipitation: (period.probabilityOfPrecipitation.value ?? 0) / 100.0,
	}))
}

// https://www.weather.gov/documentation/services-web-api

type NwsPointResponse = {
	properties: {
		forecast: string,
	},
}

type DateString = string

type ForecastPeriod = {
	name: string,
	startTime: DateString,
	endTime: DateString,
	probabilityOfPrecipitation: {
		value: number | null,
		unitCode: string,
	},
	shortForecast: string,
}

type NwsForecastResponse = {
	properties: {
		periods: ForecastPeriod[],
	},
}
