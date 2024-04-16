import styles from './index.module.css';

export default function Fallback() {
	return <p className={styles.loading}>Fetching data...</p>;
}
