import Image from "next/image"
import Head from "next/head"
import styles from "./Event.module.sass"

export default function EventPage({ event }) {
	return (
		<>
			<Head>
				<title>{event.title}</title>
			</Head>

			<div className={`${styles.event} container`}>
				<div className={styles.event__details}>
					<h1>{event.title}</h1>
					<p>{event.description}</p>
				</div>

				<div className={styles.eventCover__container}>
					<Image
						src={event.image}
						height={500}
						width={650}
						alt={event.title}
						unoptimized
					/>
				</div>
			</div>
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
