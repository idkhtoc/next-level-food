import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';

import MealDetails from './details';

export default async function Meal({ slug }) {
	const meal = await getMeal(slug);

	if (!meal) notFound();

	return <MealDetails {...meal} />;
}
