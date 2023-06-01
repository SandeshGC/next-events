import React from "react"
import { Header } from ".."
import { Footer } from ".."
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Layout = ({ children }) => {
	return (
		<div className={`${inter.className} root`}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
