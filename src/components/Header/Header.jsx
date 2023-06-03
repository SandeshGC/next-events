import Link from "next/link"
import styles from "./Header.module.sass"

const Header = () => (
	<header className={styles.header}>
		<div className="container">
			<Link href={"/"}>
				<h1>Next Events</h1>
			</Link>
			{/* <Image src={"/vercel.svg"} width={70} height={70} alt="Vercel logo" /> */}
			<nav>
				<ul>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href="/events">Events</Link>
					</li>

					<li>
						<Link href="/about-us">About</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
