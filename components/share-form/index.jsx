import styles from './index.module.css';

import shareMeal from '@/lib/actions';

import ImagePicker from './image-picker';

export default function ShareForm() {
	return (
		<form className={styles.form} action={shareMeal}>
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
			<p className={styles.actions}>
				<button type='submit'>Share Meal</button>
			</p>
		</form>
	);
}
