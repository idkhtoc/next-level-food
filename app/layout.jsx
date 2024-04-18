import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import MainHeader from '@/components/main-header';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<MainHeader />
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
