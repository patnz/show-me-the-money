import connection from './connection'

// import { Types } from WHEREVER

export function getAllMeetings(db = connection): Promise<Meeting[]> {
  return db('meetings').select('*')
}

export function addMeeting(
  meeting: Meeting,
  db = connection
): Promise<Meeting> {
  return db('meetings').insert(meeting).returning(['*'])
}

export function getAllAttendees(db = connection): Promise<Attendee[]> {
  return db('meetings').select()
}

export function addAttendee(
  attendee: Attendee,
  db = connection
): Promise<Attendee> {
  return db('meetings').insert(attendee).returning(['*'])
}
