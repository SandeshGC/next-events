import { toTitleCase } from "@/helpers"
import { CityEventCard } from "@/src/components"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import styles from "./CityEvents.module.sass"

export default function EventLocationPage({ data, city }) {
	const cityName = toTitleCase(city)
	return (
		<>
			{/* ISSUE: this toTitleCase fn initially shows a <!-- --> on title while refreshing this page */}
			<Head>
				<title>{`Events in ${cityName}`}</title>
			</Head>

			<main className={styles.cityEvents__container}>
				<h1>Events in {toTitleCase(city)}</h1>
				<div>
					{data.map((evt) => (
						<Link key={evt.id} href={`/events/${evt.city}/${evt.id}`}>
							<CityEventCard evt={evt} />
						</Link>
					))}
				</div>
			</main>
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
