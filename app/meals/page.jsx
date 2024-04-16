import { Suspense } from 'react';
import Link from 'next/link';

import styles from './page.module.css';

import Meals from '@/components/meals';
import Fallback from '@/components/fallback';

export default function MealsPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created{' '}
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy
					and fun!
				</p>
				<p className={styles.cta}>
					<Link href='/meals/share'>Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={styles.main}>
				<Suspense fallback={Fallback()}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
