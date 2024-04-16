import Link from 'next/link';

import styles from './page.module.css';

import HomeSlideshow from '@/components/home-slideshow';

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.slideshow}>
					<HomeSlideshow />
				</div>
				<div>
					<div className={styles.hero}>
						<h1>NextLevel Food for NextLevel Foodies</h1>
						<p>Taste & Share food from all over the world.</p>
					</div>
					<div className={styles.cta}>
						<Link href='/community'>Join the Community</Link>
						<Link href='/meals'>Explore meals!</Link>
					</div>
				</div>
			</header>
			<main className={styles.main}>
				<section>
					<h2>How it works</h2>
					<p>
						NextLevel Food is a platform for foodies to share their
						favorite recipes with the world. It&apos;s a place to
						discover new dishes, and to connect with other food
						lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to
						connect with other food lovers.
					</p>
				</section>

				<section>
					<h2>Why NextLevel Food?</h2>
					<p>
						NextLevel Food is a platform for foodies to share their
						favorite recipes with the world. It&apos;s a place to
						discover new dishes, and to connect with other food
						lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to
						connect with other food lovers.
					</p>
				</section>
			</main>
		</>
	);
}
