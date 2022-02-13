import Message from './backend/models/Message.js';

import { db } from './backend/config.js'
db.connect

Message.insertMany([
	{
		subject: 'Checking on you',
		content: 'How are you doing? it\'s been a while'
	},
	{
		subject: 'Just another phishing email',
		content: 'Please sign in to Amazon again using MY LINK so I can steal your credentials, thanks.'
	},
	{
		subject: 'It\'s a wonderful day',
		content: 'It\'s a perfect day for fishing, init?'
	}
]).then(data => {
	console.log('Done.');
	process.exit(1)
})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})