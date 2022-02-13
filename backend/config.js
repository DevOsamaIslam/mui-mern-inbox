import mongoose from 'mongoose'

export const user = {
	name: 'Osama'
}

export const db = {
	connect: mongoose.connect('mongodb://localhost:27017/inbox')
		.then(() => console.log('DB connected.'))
		.catch(err => console.log('Something went wrong wile connecting to DB'))
}