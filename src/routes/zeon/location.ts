export type Location = {
	latitude: number,
	longitude: number,
}

export async function getLocation(): Promise<Location> {
	if ("geolocation" in navigator) {
		return new Promise((resolve, reject) => {
			const onSuccess = (loc: GeolocationPosition) => {
				resolve({
					latitude: loc.coords.latitude,
					longitude: loc.coords.longitude,
				})
			}

			const onFailure = (err: GeolocationPositionError) => {
				reject(err.message)
			}

			navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
		})
	}

	throw new Error("Geolocation is not supported")
}
