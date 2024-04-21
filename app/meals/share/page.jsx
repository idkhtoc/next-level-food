import styles from './page.module.css';

import ShareForm from '@/components/share-form';

export const metadata = {
	title: 'Share Meals in Foodies Community - Recipies | Delicious',
	description: 'Share your delicious meals with a food-loving community.',
};

export default function ShareMealPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Share your{' '}
					<span className={styles.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={styles.main}>
				<ShareForm />
			</main>
		</>
	);
}
