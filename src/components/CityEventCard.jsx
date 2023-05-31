import Image from "next/image"
import React from "react"

const CityEventCard = ({ evt }) => {
	const { title, image, description } = evt
	return (
		<div className="card">
			<div className="card__img--container">
				<Image width={300} height={300} alt={title} src={image} unoptimized />
			</div>
			<div className="card__details--container">
				<h2>{title}</h2>
				<p> {description}</p>
			</div>
		</div>
	)
}

export default CityEventCard
