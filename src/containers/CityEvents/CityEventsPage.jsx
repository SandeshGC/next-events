import React from "react"
import { CityEventCard } from "@/src/components"
import Link from "next/link"
import styles from "./CityEvents.module.sass"
import { toTitleCase } from "@/helpers"

const CityEventsPage = ({ data, city }) => {
	return (
		<main className={`${styles.cityEvents__container} container`}>
			<h1>Events in {toTitleCase(city)}</h1>
			<div className={styles.cityEvents__list}>
				{data.map((evt) => (
					<Link key={evt.id} href={`/events/${evt.city}/${evt.id}`}>
						<CityEventCard evt={evt} />
					</Link>
				))}
			</div>
		</main>
	)
}

export default CityEventsPage
