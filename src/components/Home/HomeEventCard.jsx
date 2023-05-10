import Link from "next/link"
import Image from "next/image"

const HomeEventCard = ({ evt }) => {
	return (
		<Link key={evt.id} href={`/events/${evt.id}`} passHref legacyBehavior>
			<a>
				<div>
					<Image src={evt.image} width={"450"} height={"300"} alt={evt.title} />
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
