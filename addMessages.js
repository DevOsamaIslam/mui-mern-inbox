import Message from './models/Message.js';

import { db } from './config.js'
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
]).then(data => console.log(data))
	.catch(err => console.error(err))