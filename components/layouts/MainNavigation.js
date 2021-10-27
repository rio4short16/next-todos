import Link from 'next/link'
import styles from './MainNavigation.module.css'

function MainNavigation() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.links}>
					<li className={styles.link}><Link href="/">Home</Link></li>
					<li className={styles.link}><Link href="/todo">Todos</Link></li>
					<li className={styles.link}><Link href="/about">About</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation