import { useRouter } from "next/router"
import React, { useRef, useState } from "react"
import styles from "./Event.module.sass"
import Image from "next/image"

const SingleEventPage = ({ event }) => {
	const emailInput = useRef()
	const router = useRouter()
	const [errorMsg, setErrorMsg] = useState("")
	const [successMsg, setSuccessMsg] = useState("")
	const [src, setSrc] = useState(event.image)

	const handleRegister = async (e) => {
		e.preventDefault()

		const eventId = router?.query.id
		const email = emailInput.current.value

		if (!email) {
			return setErrorMsg("Please enter email address!")
		}

		const validEmailRegExp =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

		if (!email.match(validEmailRegExp)) {
			return setErrorMsg("Please enter a valid email address.")
		}

		try {
			const response = await fetch("/api/events/register", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					email,
					eventId,
				}),
			})

			const data = await response.json()

			if (!response.ok) throw new Error(data.message)

			emailInput.current.value = ""
			setSuccessMsg(`Email '${data.email}' registered successfully!`)
		} catch (error) {
			setErrorMsg(error ? `${error}` : `Error registering! Please try again.`)
			// console.log(error)
		}
	}

	return (
		<div>
			<div className={`${styles.event} container`}>
				<div className={styles.event__details}>
					<h1>{event.title}</h1>
					<p>{event.description}</p>
				</div>
				<div className={styles.eventCover__container}>
					<Image
						src={src}
						height={400}
						width={500}
						alt={event.title}
						onError={() => setSrc("https://placehold.co/400x500")}
						unoptimized
					/>
				</div>
			</div>

			<div className={styles.register__wrapper}>
				<div className={`${styles.register__container} container`}>
					<h3>Register for this event:</h3>
					<div className={styles.register__input}>
						<label>
							<input
								ref={emailInput}
								type="email"
								name="email"
								onChange={() => {
									setErrorMsg("")
									setSuccessMsg("")
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										handleRegister(e)
									}
								}}
								placeholder="Email address"
								className={styles.register__email}
							/>
						</label>
						<button className={styles.register__btn} onClick={handleRegister}>
							Register
						</button>
					</div>
					<p className={styles.register__errorMsg}>{errorMsg}</p>
					<p className={styles.register__successMsg}>{successMsg}</p>
				</div>
			</div>
		</div>
	)
}

export default SingleEventPage
