import { toTitleCase } from "@/helpers"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function EventLocationPage({ data, city }) {
	return (
		<>
			<Head>
				{/* this toTitleCase fn initially shows a <!-- --> on title while refreshing this page */}
				<title>Events in {toTitleCase(city)}</title>
			</Head>
			<main>
				{data.map((evt) => (
					<Link
						key={evt.id}
						href={`/events/${evt.city}/${evt.id}`}
						passHref
						legacyBehavior
					>
						<a>
							<Image width={300} height={300} alt={evt.title} src={evt.image} />
							<h2>{evt.title}</h2>
							<p> {evt.description}</p>
						</a>
					</Link>
				))}
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
