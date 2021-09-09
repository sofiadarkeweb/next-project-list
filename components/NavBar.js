import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/imgtest.png" alt="hej" width={128} height={128} />
			</div>

			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ninjas">
				<a>Ninja listing</a>
			</Link>
		</nav>
	);
};

export default NavBar;
