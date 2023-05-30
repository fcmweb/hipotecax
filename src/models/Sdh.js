import { Schema, models, model } from 'mongoose';

const sdhSchema = new Schema(
	{
		title: {
			type: String,
			require: [true, 'Title is required'],
			unique: true,
			trim: true,
			maxlength: [60, 'The title must be less than 60 chart'],
		},
		description: {
			type: String,
			require: true,
			trim: true,
			maxlength: [200, 'The description must be less than 200 chart'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default models.Sdh || model('Sdh', sdhSchema);
