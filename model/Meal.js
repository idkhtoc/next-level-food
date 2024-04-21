import mongoose from 'mongoose';

const Meal = mongoose.Schema({
	title: String,
	summary: String,
	instructions: String,
	creator: String,
	slug: String,
	creator_email: String,
	image: String,
});

export default mongoose.models.Meal || mongoose.model('Meal', Meal);
