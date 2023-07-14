import { toTitleCase } from "@/helpers"
import Head from "next/head"
import React from "react"
import CityEventsPage from "@/src/containers/CityEvents/CityEventsPage"

export default function EventLocationPage({ data, city }) {
	const cityName = toTitleCase(city)

	return (
		<>
			{/* ISSUE: this toTitleCase fn initially shows a <!-- --> on title while refreshing this page */}
			<Head>
				<title>{`Events in ${cityName}`}</title>
			</Head>

			<CityEventsPage data={data} city={city} />
		</>
	)
}

export async function getStaticPaths() {
	const { events_categories } = await import("/data/data.json")

	const allPaths = events_categories.map((evt) => ({
		params: { eventLocation: evt.id },
	}))
	return {
		paths: allPaths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const { allEvents } = await import("/data/data.json")

	const data = allEvents.filter(
		(evt) => evt.city === context?.params.eventLocation
	)

	return {
		props: {
			data,
			city: context?.params.eventLocation,
		},
	}
}
