import Image from "next/image"
import React from "react"
import styles from "./CityCard.module.sass"

const CityCard = ({ evt }) => {
	return (
		<div className={styles.event__card}>
			<div className={styles.img__container}>
				<Image
					src={evt.image}
					alt={evt.title}
					width={350}
					height={275}
					unoptimized
				/>
			</div>
			<h2>{evt.title}</h2>
		</div>
	)
}

export default CityCard
