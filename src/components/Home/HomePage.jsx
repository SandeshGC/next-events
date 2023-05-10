import { HomeEventCard } from ".."
import styles from "./Home.module.sass"

const HomePage = ({ data }) => {
	return (
		<div className={styles.eventCards}>
			{data.map((evt) => (
				<HomeEventCard key={evt.id} evt={evt} />
			))}
		</div>
	)
}

export default HomePage
