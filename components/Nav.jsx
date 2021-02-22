/** @format */

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import styles from '../styles/Nav.module.css';
const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<DarkModeToggle />
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
