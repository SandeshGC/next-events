import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const HomePage = ({ data }) => {
	return (
		<main className={`${inter.className}`}>
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
		</main>
	)
}

export default HomePage
