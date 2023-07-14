import path from "path"
import fs from "fs"

function buildPath() {
	console.log("building path...", process.cwd())
	return path.resolve(process.cwd(), "data", "data.json")
}

function extractData(filePath) {
	const jsonData = fs.readFileSync(filePath)
	return JSON.parse(jsonData)
}

export default function handler(req, res) {
	const { method } = req
	const filePath = buildPath()
	const { events_categories, allEvents } = extractData(filePath)

	if (!allEvents) {
		return res.status(404).json({
			message: "Could not get events data!",
		})
	}

	if (method === "PUT") {
		const { email, eventId } = req.body

		if (!email) {
			return res.status(422).json({ message: "Email is required!" })
		} else if (!email.includes("@")) {
			return res.status(422).json({ message: "Invalid email address!" })
		}

		const newAllEvents = allEvents.map((event) => {
			// if email already exists, send conflict error

			if (event?.id === eventId) {
				if (event.emails_registered.includes(email)) {
					res
						.status(409)
						.json({ message: "Email has already been registered!" })

					// return un-modified event to the map function

					return event
				}

				// if email does not already exist, add it to the list of registered emails
				event.emails_registered.push(email)
			}

			// if it is not the event that user registered for, then simply return the event.
			// if it is the event that user registered for, then return the modified event.
			console.log(event)
			return event
		})

		fs.writeFileSync(
			filePath,
			JSON.stringify({ events_categories, allEvents: newAllEvents })
		)

		return res
			.status(200)
			.json({ message: "Email registered!", email: email, eventId: eventId })
	}
}
