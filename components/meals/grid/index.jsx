import styles from './index.module.css';

import MealsItem from '../item';

export default function MealsGrid({ meals }) {
	return (
		<ul className={styles.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealsItem {...meal} />
				</li>
			))}
		</ul>
	);
}
