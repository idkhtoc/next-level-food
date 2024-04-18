import { Suspense } from 'react';

import Fallback from '@/components/fallback';
import Meal from '@/components/meal';

export async function generateMetadata({ params }) {
	return {
		title: 'Delicious meals, created by you',
		description:
			'Choose your favorite recipe and cook it yourself. It is easy and fun!',
	};
}

export default function MealDetailsPage({ params }) {
	return (
		<Suspense fallback={Fallback()}>
			<Meal slug={params.mealSlug} />
		</Suspense>
	);
}
