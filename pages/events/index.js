import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function EventsPage({ data }) {
	return (
		<>
			<Head>
				<title>Events</title>
			</Head>

			<div className="events__container">
				{data.map((evt) => (
					<Link key={evt.id} href={`/events/${evt.id}`}>
						<div className="event__card">
							<div className="img__container">
								<Image
									src={evt.image}
									alt={evt.title}
									width="400"
									height="300"
									unoptimized
								/>
							</div>
							<h2>{evt.title}</h2>
						</div>
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
