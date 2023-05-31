import { toTitleCase } from "@/helpers"
import { CityEventCard } from "@/src/components"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function EventLocationPage({ data, city }) {
	return (
		<>
			<Head>
				{/* ISSUE: this toTitleCase fn initially shows a <!-- --> on title while refreshing this page */}
				<title>Events in {toTitleCase(city)}</title>
			</Head>

			<main className="city__events--container">
				<h1>Events in {toTitleCase(city)}</h1>
				<div className="city__events--list">
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
