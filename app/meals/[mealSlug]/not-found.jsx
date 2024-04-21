'use client';

import { usePathname } from 'next/navigation';

import NotFound from '@/components/not-found';

export default function MealDetailsPageNotFound() {
	const pathname = usePathname();

	const slug = pathname.split('/').pop();

	return (
		<NotFound
			title={`Meal was not found`}
			description={`Unfortunately, we could not find the ${slug}`}
		/>
	);
}
