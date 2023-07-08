export default function handler(req, res) {
	const { method } = req

	if (method === "POST") {
		const { email, eventId } = req.body
		res
			.status(200)
			.json({ message: "Email registered!", email: email, eventId: eventId })
	}

	res
		.status(400)
		.json({ message: "Only POST request available at this endpoint." })
}
