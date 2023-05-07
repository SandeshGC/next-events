import Head from "next/head"
import { HomePage } from "@/src/components"

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Next Events</title>
			</Head>

			<HomePage data={data} />
		</>
	)
}

export async function getServerSideProps() {
	const { events_categories } = await import("/data/data.json")

	return {
		props: {
			data: events_categories,
		},
	}
}
