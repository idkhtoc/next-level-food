import { getMeal } from '@/lib/meals';

import MealDetails from './details';

export default async function Meal({ slug }) {
	const meal = await getMeal(slug);

	return <MealDetails {...meal} />;
}
