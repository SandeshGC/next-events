import Link from "next/link"
import Image from "next/image"

const HomePage = ({ data }) => {
	return (
		<>
			{data.map((evt) => (
				<Link key={evt.id} href={`/events/${evt.id}`} passHref legacyBehavior>
					<a>
						<Image
							src={evt.image}
							width={"100"}
							height={"100"}
							alt="event thumbnail"
						/>
						<h2>{evt.title}</h2>
						<p>{evt.description}</p>
					</a>
				</Link>
			))}
		</>
	)
}

export default HomePage
