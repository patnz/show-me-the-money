import express from 'express'
import * as db from '../db/db'
import * as utils from '../db/dbUtils'

const router = express.Router()

//gets MeetingWithAttendeesInfo[]
router.get('/', (req, res) => {
  utils
    .getMeetingsWithAttendees()
    .then((meeetingsData) => {
      res.json(meeetingsData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

//add MeetingWithAttendeesInfo as meeting and attendees to db
router.post('/', (req, res) => {
  utils
    .addMeetingWithAttendees(req.body)
    .then((meetingData) => {
      res.json(meetingData)
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
