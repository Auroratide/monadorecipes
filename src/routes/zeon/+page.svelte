<script lang="ts">
	import { Page } from "$lib/design/Page"
	import { BasicPanel } from "$lib/design/BasicPanel"
	import { Button } from "$lib/design/Button"
	import { BackdropScene } from "$lib/design/Backdrop"
	import { FetchState } from "./FetchState"
	import { getLocation } from "./location"
	import { getForecast } from "./forecast"
	import { findNextRain } from "./next-rain"
	import sun from "./sun.svg"
	import cloud from "./cloud.svg"
	import rain from "./rain.svg"

	let fetchState: FetchState = FetchState.Pending()

	const whenWillItRain = async () => {
		try {
			fetchState = FetchState.Fetching()
			const location = await getLocation()
			const forecast = await getForecast(location)
			const nextRain = findNextRain(forecast)

			if (nextRain != null) {
				fetchState = FetchState.Rain(nextRain)
			} else {
				fetchState = FetchState.NoRain()
			}
		} catch (err) {
			fetchState = FetchState.Error((err as Error).message ?? err)
		}
	}
</script>

<Page title="Hoping for Rain" backdrop={BackdropScene.Zeon}>
	<div class="smaller-box">
		<BasicPanel>
			<div class="text-center">
				<div class="quote-container">
					<p class="quote">And then we hope for rain.</p>
					<p class="cite">Zeon, trying so hard to grow potatoes</p>
				</div>
				<hr />
				{#if fetchState.state === "Pending"}
					<p class="large"><button class="{Button()}" on:click={whenWillItRain}>When will it rain?</button></p>
					<p><small>This will request your location. <strong>We don't store your location</strong>, and we use it only for getting your local weather. We're just poking fun at one of Xenoblade 3's most notorious quests!</small></p>
				{:else if fetchState.state === "Fetching"}
					<div aria-hidden="true" class="sliding-loader">
						<div class="sliding-window">
							<img src={sun} alt="" class="weather-icon" />
							<img src={cloud} alt="" class="weather-icon" />
							<img src={rain} alt="" class="weather-icon" />
							<img src={sun} alt="" class="weather-icon" />
						</div>
					</div>
					<p aria-live="polite">Please wait...</p>
				{:else if fetchState.state === "Rain"}
					<p><img src={rain} alt="expect rain" class="weather-icon highlight" /></p>
					<p aria-live="assertive">Expect rain {fetchState.forecast.name}!</p>
				{:else if fetchState.state === "No Rain"}
					<p><img src={sun} alt="no rain" class="weather-icon highlight" /></p>
					<p aria-live="assertive">Sorry, no rain is expected.</p>
				{:else if fetchState.state === "Error"}
					<p aria-live="assertive">Something went wrong.</p>
					<p>{fetchState.message}</p>
				{/if}
			</div>
		</BasicPanel>
	</div>
</Page>

<style>
	.smaller-box {
		max-inline-size: 30em;
		margin: auto;
	}

	.text-center { text-align: center; }

	.large {
		font-size: 1.25em;
		margin-block: 2em;
	}

	/* hack to fix flash-of-left-aligned-button? */
	button { margin: auto; }

	.quote-container {
		max-inline-size: 20em;
		margin: auto;
	} .quote {
		margin-block-end: 0.333em;
		font-size: 110%;
	} .quote::before {
		content: "“";
	} .quote::after {
		content: "”";
	} .cite {
		text-align: end;
		font-size: 80%;
		font-style: italic;
	} .cite::before {
		content: "- ";
	}

	.weather-icon {
		display: inline-block;
		inline-size: 5em;
		max-inline-size: 100%;
	} .weather-icon.highlight {
		filter: drop-shadow(0 0 1em var(--color-bg-light-translucent));
	}

	.sliding-loader {
		margin: auto;
		inline-size: 5em;
		block-size: 5em;
		overflow: hidden;
		margin-block-end: 1.333em;
		opacity: 0.5;
	} .sliding-loader img {
		margin: 0;
		display: inline-block;
		transform: scale(0.75);
	} .sliding-window {
		inline-size: 20em;
		animation: slide 1s infinite linear;
		display: flex;
		gap: 0;
	}

	@keyframes slide {
		from { transform: translateX(0%); }
		to { transform: translateX(-75%); }
	}

	@media (prefers-reduced-motion: reduce) {
		.sliding-window {
			animation: none;
		}
	}
</style>