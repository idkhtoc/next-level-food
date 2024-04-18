'use server';

import { S3 } from '@aws-sdk/client-s3';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
	region: process.env.AWS_REGION,
});

const db = sql('meals.db');

export async function getMeals() {
	return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function postMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;

	const bufferedImage = await meal.image.arrayBuffer();

	s3.putObject({
		Bucket: process.env.IMAGES_BUCKET,
		Key: fileName,
		Body: Buffer.from(bufferedImage),
		ContentType: meal.image.type,
	});

	meal.image = fileName;

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
