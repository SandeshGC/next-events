import Link from "next/link"
import Image from "next/image"

const HomeEventCard = ({ evt }) => {
	return (
		<Link key={evt.id} href={`/events/${evt.id}`} passHref legacyBehavior>
			<a>
				<div className="img__container">
					<Image src={evt.image} width={"450"} height={"300"} alt={evt.title} unoptimized/>
				</div>
				<div>
					<h2>{evt.title}</h2>
					<p>{evt.description}</p>
				</div>
			</a>
		</Link>
	)
}

export default HomeEventCard
