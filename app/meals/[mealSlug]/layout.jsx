import { Suspense } from 'react';

import Fallback from '@/components/fallback';

export default function RootLayout({ children }) {
	return <Suspense fallback={Fallback()}>{children}</Suspense>;
}
