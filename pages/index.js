import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title> Ninjas | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae
					sapiente, et possimus laudantium, in ea, delectus cupiditate dicta
					quaerat incidunt modi quibusdam ducimus libero quidem earum illo
					recusandae voluptatibus?
				</p>
				<Link href="/ninjas">
					<a>See Ninja listing</a>
				</Link>
			</div>
		</>
	);
}
