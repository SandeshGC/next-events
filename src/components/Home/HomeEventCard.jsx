import Link from "next/link"
import Image from "next/image"
import styles from "./Home.module.sass"

const HomeEventCard = ({ evt }) => {
	return (
		<div className={styles.eventCard}>
			<Link key={evt.id} href={`/events/${evt.id}`} passHref legacyBehavior>
				<a>
					<div>
						<Image
							className={styles.eventCoverImg}
							src={evt.image}
							width={"450"}
							height={"300"}
							alt={evt.title}
						/>
					</div>
					<div>
						<h2>{evt.title}</h2>
						<p>{evt.description}</p>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default HomeEventCard
