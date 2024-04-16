import styles from './index.module.css';

export default function MealsFallback() {
	return <p className={styles.loading}>Fetching data...</p>;
}
