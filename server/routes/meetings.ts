import express from 'express'
import * as db from '../db/db'
import * as utils from '../db/dbUtils'

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllMeetings()
    .then((meetingsData) => {
      res.json(meetingsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

//gets MeetingWithAttendeesInfo[]
router.get('/attendee-data', (req, res) => {
  utils
    .getMeetingsWithAttendees()
    .then((meeetingsData) => {
      res.json(meeetingsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addMeeting(req.body)
    .then((meetingsData) => {
      res.json(meetingsData)
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
      res.status(500).send(err.message)
    })
})

export default router
