import Link from "next/link"

const Header = () => (
	<header>
		<nav>
			{/* <img /> */}
			<Link href={"/"} passHref legacyBehavior>
				<a>Home</a>
			</Link>
			<Link href="/events" passHref legacyBehavior>
				<a>Events</a>
			</Link>
			<Link href="/about" passHref legacyBehavior>
				<a>About</a>
			</Link>
		</nav>
	</header>
)

export default Header
