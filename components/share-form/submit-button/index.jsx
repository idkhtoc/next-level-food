'use client';

import { useFormStatus } from 'react-dom';

export default function ShareFormSubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button type='submit' disabled={pending}>
			{pending ? 'Submitting...' : 'Share Meal'}
		</button>
	);
}
