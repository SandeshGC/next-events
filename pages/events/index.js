import { CityCard } from "@/src/components"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import styles from "./AllEvents.module.sass"

export default function EventsPage({ data }) {
	return (
		<>
			<Head>
				<title>Events</title>
			</Head>

			<div className={`${styles.events__container} container`}>
				{data.map((evt) => (
					<Link key={evt.id} href={`/events/${evt.id}`}>
						<CityCard evt={evt} />
					</Link>
				))}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const { events_categories } = await import("/data/data.json")

	return {
		props: {
			data: events_categories,
		},
	}
}
