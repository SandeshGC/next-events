import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function EventsPage({ data }) {
	return (
		<div>
			{data.map((evt) => (
				<Link key={evt.id} href={`/events/${evt.id}`} passHref legacyBehavior>
					<a>
						<Image src={evt.image} alt={evt.title} width="400" height="300" />
						<h2>{evt.title}</h2>
					</a>
				</Link>
			))}
		</div>
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