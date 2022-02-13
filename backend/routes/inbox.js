import express from 'express';

import Message from '../models/Message.js';

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    // get all the messages from the database
    // call .lean() to return the documents only
    let data = await Message.find().lean()
    if(data)
      res.status(200).json(data)
    else res.status(404).json([])
  } catch (error) {
    res.status(500).json({error})
  }
})

router.get('/single/:id', async (req, res) => {
  try {
    // get the id passed through the endpoint
    let id = req.params.id
    // retrieve the message by its id
    let data = await Message.findById(id)
    if(data) {
      // mark the message as read
      data.isRead = true
      await data.save()
      // return _doc because we don't want to 
      // send the entire mongoose object, just the data
      return res.status(200).json(data._doc)
    }
    else return res.status(404).json({})
  } catch (error) {
    return res.status(500).json({error})
  }
})

router.patch('/single/read', async (req, res) => {
  // get the message id from the request body
  let { id } = req.body
  // find the message in the database
  let data = await Message.findById(id)
  if(!data) return res.status(404).json({})
  // change the read status
  data.isRead = true
  await data.save()
  // return the document only
  return res.status(200).json(data._doc)
})

router.patch('/unread', async (req, res) => {
  try {
    let data = await Message.updateMany({}, {
      $set: {
        isRead: false
      }
    }, { new: true })
    return res.json(data)
  } catch (error) {
    console.error({error});
    return res.status(500).json({error})
  }  
})

export default router