import React from "react"
import { Header } from ".."
import { Footer } from ".."
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Layout = ({ children }) => {
	return (
		<body>
			<Header />
			<main className={`${inter.className}`}>{children}</main>
			<Footer />
		</body>
	)
}

export default Layout
