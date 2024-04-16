import styles from './index.module.css';

import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
	return (
		<ul className={styles.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
}
