import express from 'express'
import * as db from '../db/dbUtils'
// import dbFunctions here

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllMeetings()
    .then((meeetingsData) => {
      res.json(meeetingsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addMeeting(req.body)
    .then((meeetingsData) => {
      res.json(meeetingsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
