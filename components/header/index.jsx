import Link from "next/link";
import React from "react";
import { SiGradleplaypublisher } from "react-icons/si";
import styles from "./styles.module.css"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Link href="/" className={styles.logo}>
					<SiGradleplaypublisher />
				</Link>
				<nav className={styles.navigationMenu}>
					<Link href="/">
						Movies
					</Link>
					<Link href="/">
						Series
					</Link>
					<Link href="/">
						Kids
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
