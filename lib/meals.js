'use server';

import { cache } from 'react';
import { S3 } from '@aws-sdk/client-s3';
import slugify from 'slugify';
import xss from 'xss';
import connectDB from './connectDB';
import { default as mealSchema } from '@/model/Meal';

const s3 = new S3({
	region: process.env.AWS_REGION,
});

async function _postImage(image, slug) {
	const extension = image.name.split('.').pop();
	const fileName = slug + '.' + extension;

	const bufferedImage = await image.arrayBuffer();

	try {
		await s3.putObject({
			Bucket: process.env.IMAGES_BUCKET,
			Key: fileName,
			Body: Buffer.from(bufferedImage),
			ContentType: image.type,
		});
	} catch (e) {
		throw new Error('Image upload failed');
	}

	return fileName;
}

export async function getMeals() {
	await connectDB();

	try {
		const meals = await mealSchema.find({});

		return meals.map((meal) => meal.toObject());
	} catch (e) {
		throw new Error('Failed to fetch meals.');
	}
}

export async function getMeal(slug) {
	await connectDB();

	const meal = await mealSchema.findOne({ slug });

	return meal?.toObject();
}

export const getCachedMeal = cache(async (slug) => await getMeal(slug));

export async function postMeal(meal) {
	await connectDB();

	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	meal.image = await _postImage(meal.image, meal.slug);

	try {
		const newMeal = new mealSchema(meal);

		await newMeal.save();
	} catch (e) {
		throw new Error('Failed to save meal.');
	}
}
