import express from 'express';
import cors from 'cors'

import { db } from './backend/config.js'
import inbox from './backend/routes/inbox.js'

const app = express()
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

db.connect

app.use('/api', inbox)

app.listen(5000, () => console.log('Server is running...'))