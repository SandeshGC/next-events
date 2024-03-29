import Image from "next/image"
import React, { useState } from "react"
import styles from "./CityEventCard.module.sass"

const CityEventCard = ({ evt }) => {
	const { title, image, description } = evt
	const [src, setSrc] = useState(image)

	return (
		<div className={styles.card}>
			<div className={styles.img__container}>
				<Image
					width={325}
					height={285}
					alt={title}
					src={src}
					onError={() => setSrc("https://www.placehold.co/325x285")}
					unoptimized
				/>
			</div>
			<div className={styles.details__container}>
				<h2>{title}</h2>
				<p> {description}</p>
			</div>
		</div>
	)
}

export default CityEventCard
