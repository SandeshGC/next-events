import { HomeEventCard } from "../../components"
import styles from "./Home.module.sass"

const HomePage = ({ data }) => {
	return (
		<div className={`${styles.eventCards} container`}>
			{data.map((evt) => (
				<HomeEventCard key={evt.id} evt={evt} />
			))}
		</div>
	)
}

export default HomePage
