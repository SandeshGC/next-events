import Image from "next/image"
import Link from "next/link"

const Header = () => (
	<header>
		<div>
			<Image src={"/vercel.svg"} width={70} height={70} alt="Vercel logo" />
			<nav>
				<ul>
					<li>
						<Link href={"/"} passHref legacyBehavior>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/events" passHref legacyBehavior>
							<a>Events</a>
						</Link>
					</li>

					<li>
						<Link href="/about" passHref legacyBehavior>
							<a>About</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
