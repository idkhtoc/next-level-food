import { notFound } from 'next/navigation';

import { getCachedMeal } from '@/lib/meals';

import MealDetails from '@/components/meal-details';

export async function generateMetadata({ params }) {
	const meal = await getCachedMeal(params.mealSlug);

	if (!meal) notFound();

	return {
		title: meal.title,
		description: meal.summary,
	};
}

export default async function MealDetailsPage({ params }) {
	const meal = await getCachedMeal(params.mealSlug);

	if (!meal) notFound();

	return <MealDetails {...meal} />;
}
