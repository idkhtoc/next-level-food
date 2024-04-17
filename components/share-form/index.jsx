'use client';

import { useFormState } from 'react-dom';

import styles from './index.module.css';

import shareMeal from '@/lib/actions';

import ImagePicker from './image-picker';
import ShareFormSubmitButton from './submit-button';

export default function ShareForm() {
	const [state, formAction] = useFormState(shareMeal, { message: null });

	return (
		<form className={styles.form} action={formAction}>
			<div className={styles.row}>
				<p>
					<label htmlFor='name'>Your name</label>
					<input type='text' id='name' name='creator' required />
				</p>
				<p>
					<label htmlFor='email'>Your email</label>
					<input
						type='email'
						id='email'
						name='creator_email'
						required
					/>
				</p>
			</div>
			<p>
				<label htmlFor='title'>Title</label>
				<input type='text' id='title' name='title' required />
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input type='text' id='summary' name='summary' required />
			</p>
			<p>
				<label htmlFor='instructions'>Instructions</label>
				<textarea
					id='instructions'
					name='instructions'
					rows='10'
					required
				></textarea>
			</p>
			<ImagePicker label='Meal image' name='image' />
			{state.message && <p>{state.message}</p>}
			<p className={styles.actions}>
				<ShareFormSubmitButton />
			</p>
		</form>
	);
}
