import { Suspense } from 'react';

import Fallback from '@/components/fallback';
import Meal from '@/components/meal';

export default function MealDetailsPage({ params }) {
	return (
		<Suspense fallback={Fallback()}>
			<Meal slug={params.mealSlug} />
		</Suspense>
	);
}
