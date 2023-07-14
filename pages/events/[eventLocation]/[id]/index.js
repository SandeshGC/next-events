import Head from "next/head"
import SingleEventPage from "@/src/containers/SingleEvent/SingleEventPage"

export default function EventPage({ event }) {
	return (
		<>
			<Head>
				<title>{event.title}</title>
			</Head>

			<SingleEventPage event={event} />
		</>
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
