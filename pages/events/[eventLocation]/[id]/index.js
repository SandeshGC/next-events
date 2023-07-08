import Image from "next/image"
import Head from "next/head"
import styles from "./Event.module.sass"
import { useRef } from "react"
import { useRouter } from "next/router"

export default function EventPage({ event }) {
	const emailInput = useRef()
	const router = useRouter()

	const handleRegister = async (e) => {
		e.preventDefault()

		const eventId = router?.query.id
		const email = emailInput.current.value

		if (!email) {
			return window.alert("Please enter email.")
		}

		try {
			const response = await fetch("/api/events/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					email,
					eventId,
				}),
			})

			if (!response.ok) throw response

			const data = await response.json()

			window.alert(`${data.message} \n ${data.email}!`)
		} catch (error) {
			window.alert("Error registering!\nPlease try again.")
			console.log("Error:", error)
		}
	}

	return (
		<>
			<Head>
				<title>{event.title}</title>
			</Head>

			<div>
				<div className={`${styles.event} container`}>
					<div className={styles.event__details}>
						<h1>{event.title}</h1>
						<p>{event.description}</p>
					</div>
					<div className={styles.eventCover__container}>
						<Image
							src={event.image}
							height={500}
							width={650}
							alt={event.title}
							unoptimized
						/>
					</div>
				</div>

				<div className={styles.register__wrapper}>
					<div className={`${styles.register__container} container`}>
						<h3>Register for this event:</h3>
						<div className={styles.register__input}>
							<input
								ref={emailInput}
								type="email"
								name="email"
								placeholder="Email address"
								className={styles.register__email}
							/>
							<button className={styles.register__btn} onClick={handleRegister}>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export async function getStaticPaths(context) {
	const { allEvents } = await import("/data/data.json")

	const allPaths = allEvents.map((evt) => ({
		params: {
			eventLocation: evt.city,
			id: evt.id,
		},
	}))

	return {
		paths: allPaths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const { allEvents } = await import("/data/data.json")
	const event = allEvents.find(
		(evt) =>
			evt.city === context?.params.eventLocation &&
			evt.id === context?.params.id
	)
	return {
		props: {
			event,
		},
	}
}
