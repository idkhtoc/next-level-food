export default function Meal({ params }) {
	return (
		<main>
			<h1 style={{ color: 'white', textAlign: 'center' }}>
				Meal! -&gt; {params.meal}
			</h1>
		</main>
	);
}
