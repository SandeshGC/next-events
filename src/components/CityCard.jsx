import Image from "next/image"
import React from "react"

const CityCard = ({ evt }) => {
	return (
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
	)
}

export default CityCard
