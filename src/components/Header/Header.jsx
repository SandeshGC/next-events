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
						<Link href={"/"} passHref legacyBehavior>
							Home
						</Link>
					</li>
					<li>
						<Link href="/events" passHref legacyBehavior>
							Events
						</Link>
					</li>

					<li>
						<Link href="/about-us" passHref legacyBehavior>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
