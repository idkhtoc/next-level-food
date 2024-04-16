'use client';

import { usePathname } from 'next/navigation';

import NotFound from '@/components/not-found';

export default function MealDetailsPageNotFound() {
	const pathname = usePathname();

	return (
		<NotFound
			title={`${pathname.match(/([^/]+)$/g)} was not found`}
			description='Unfortunately, we could not find the requested meal'
		/>
	);
}
