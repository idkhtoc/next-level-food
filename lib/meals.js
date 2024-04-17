'use server';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function postMeal(formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		creator: formData.get('creator'),
		creator_email: formData.get('creator_email'),
		image: formData.get('image'),
	};

	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error('Saving image failed!');
		}
	});

	meal.image = `/images/${fileName}`;

	db.prepare(
		`
		INSERT INTO meals
			(slug, title, image, summary, instructions, creator, creator_email)
		VALUES (
			@slug,
			@title,
			@image,
			@summary,
			@instructions,
			@creator,
			@creator_email
		)
	`
	).run(meal);
}
