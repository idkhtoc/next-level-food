import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.css';

import logoImg from '@/assets/logo.png';

import MainHeaderBackground from './main-header-background';

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
							<Link href='/meals'>Browse Meals</Link>
						</li>
						<li>
							<Link href='/community'>Foodies Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
