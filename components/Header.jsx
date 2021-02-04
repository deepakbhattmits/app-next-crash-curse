/** @format */

import styles from '../styles/Header.module.css';
const Header = () => {
	return (
		<div>
			<h1 className={styles.title}>
				<span>WebDev</span> News
			</h1>
			<p className={styles.description}>
				Keep up to date with latest webDev news
			</p>
		</div>
	);
};
export default Header;
