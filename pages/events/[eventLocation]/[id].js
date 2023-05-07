import Image from "next/image"
import React from "react"
export default function EventPage({ event }) {
	return (
		<div>
			<Image src={event.image} height={300} width={400} alt={event.title} />
			<h1>{event.title}</h1>
			<p>{event.description}</p>
		</div>
	)
}

export async function getStaticPaths(context) {
	const { allEvents } = await import("/data/data.json")

	const allPaths = allEvents.map((evt) => ({
		params: {
			eventLocation: evt.city,
			id: evt.id,
		},
	}))

	return {
		paths: allPaths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const { allEvents } = await import("/data/data.json")
	const event = allEvents.find(
		(evt) =>
			evt.city === context?.params.eventLocation &&
			evt.id === context?.params.id
	)
	return {
		props: {
			event,
		},
	}
}
