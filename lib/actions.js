'use server';

import { redirect } from 'next/dist/server/api-utils';

import { postMeal } from './meals';

export default async function shareMeal(formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		creator: formData.get('creator'),
		creator_email: formData.get('creator_email'),
		image: formData.get('image'),
	};

	await postMeal(meal);

	redirect('/meals');
}
