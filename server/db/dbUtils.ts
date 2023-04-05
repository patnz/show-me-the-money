import connection from './connection'
import * as Models from '../../models/attendee'
import * as Model from '../../models/meeting'

export function getAllMeetings(db = connection): Promise<Model.Meeting[]> {
  return db('meetings').select('*')
}

export function addMeeting(
  meeting: Model.Meeting,
  db = connection
): Promise<Model.Meeting> {
  return db('meetings').insert(meeting).returning(['*'])
}

export function getAllAttendees(db = connection): Promise<Models.Attendee[]> {
  return db('meetings').select()
}

export function addAttendee(
  attendee: Models.Attendee,
  db = connection
): Promise<Models.Attendee> {
  return db('meetings').insert(attendee).returning(['*'])
}
