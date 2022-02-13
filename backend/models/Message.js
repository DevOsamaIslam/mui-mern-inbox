import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	subject: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	isRead: {
		type: Boolean,
		default: false
	}
})

export default mongoose.model('Message', schema)