'use server';

import { redirect } from 'next/navigation';

import { postMeal } from './meals';
import { revalidatePath } from 'next/cache';

function _isTextInvalid(text) {
	return text.length === 0 && text.trim().length === 0;
}

export default async function shareMeal(_prevState, formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		creator: formData.get('creator'),
		creator_email: formData.get('creator_email'),
		image: formData.get('image'),
	};

	if (
		_isTextInvalid(meal.title) ||
		_isTextInvalid(meal.summary) ||
		_isTextInvalid(meal) ||
		_isTextInvalid(meal.instructions) ||
		_isTextInvalid(meal.creator) ||
		_isTextInvalid(meal.creator_email) ||
		!meal.creator_email.includes('@') ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: 'Invalid input.',
		};
	}

	await postMeal(meal);

	revalidatePath('/meals', 'layout');

	redirect('/meals');
}
