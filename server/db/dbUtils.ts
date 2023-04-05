import connection from './connection'
import * as Models from '../../models/attendee'
import * as Model from '../../models/meeting'

// meetings

export function getAllMeetings(db = connection): Promise<Model.Meeting[]> {
  return db('meetings').select('*')
}

export function addMeeting(
  meeting: Model.Meeting,
  db = connection
): Promise<Model.Meeting> {
  return db('meetings')
    .insert(meeting)
    .returning(['*'])
    .then((data) => data[0])
}

export function delMeeting(id: number, db = connection): Promise<number> {
  return db('meetings').where({ id }).del()
}

// attendees

export function getAllAttendees(db = connection): Promise<Models.Attendee[]> {
  return db('attendees').select()
}

export function addAttendee(
  attendee: Models.Attendee,
  db = connection
): Promise<Models.Attendee> {
  return db('attendees')
    .insert(attendee)
    .returning(['*'])
    .then((data) => data[0])
}

export function delAttendee(id: number, db = connection): Promise<number> {
  return db('attendees').where({ id }).del()
}
