import styles from './index.module.css';

export default function NotFound({ title, description }) {
	return (
		<main className={styles['not-found']}>
			<h1>{title}</h1>
			<p>{description}</p>
		</main>
	);
}
