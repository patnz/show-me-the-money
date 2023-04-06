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

router.delete('/:id', (req, res) => {
  db.delMeeting(Number(req.params.id))
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export default router
