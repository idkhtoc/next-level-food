import Link from 'next/link';

export default function Meals() {
	return (
		<main>
			<h1 style={{ color: 'white', textAlign: 'center' }}>Meals!</h1>
			<ul>
				<li>
					<Link href='meals/1'>Meal! 1</Link>
				</li>
				<li>
					<Link href='meals/2'>Meal! 2</Link>
				</li>
			</ul>
		</main>
	);
}
