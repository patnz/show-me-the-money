import express from 'express'
import * as db from '../db/dbUtils'

const router = express.Router()

router.get('/', (res, req) => {
  db.getAllAttendees()
    .then((attendeesData) => {
      res.json(attendeesData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (res, req) => {
  db.addAttendee(req.body)
    .then((attendeesData) => {
      res.json(attendeesData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
