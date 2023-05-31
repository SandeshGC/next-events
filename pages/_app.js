import Layout from "@/src/components/Layout/Layout"
import "@/styles/globals.sass"
import "@/styles/general.sass"
import Head from "next/head"

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="description" content="Provides information about events" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
