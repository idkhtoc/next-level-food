import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.css';

import logoImg from '@/assets/logo.png';

import MainHeaderBackground from './background';
import NavLink from './nav-link';

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={styles['main-header']}>
				<Link href='/' className={styles.logo}>
					<Image
						src={logoImg}
						alt='A plate with a food on it'
						priority
					/>
					NextLevelFood
				</Link>

				<nav className={styles.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
