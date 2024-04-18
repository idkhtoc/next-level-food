import { Suspense } from 'react';

import { getMeal } from '@/lib/meals';

import Fallback from '@/components/fallback';
import Meal from '@/components/meal';

export async function generateMetadata({ params }) {
	const meal = getMeal(params.mealSlug);

	return {
		title: meal.title,
		description: meal.summary,
	};
}

export default function MealDetailsPage({ params }) {
	return (
		<Suspense fallback={Fallback()}>
			<Meal slug={params.mealSlug} />
		</Suspense>
	);
}
