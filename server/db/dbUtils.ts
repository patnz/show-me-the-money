import connection from './connection'
import {
  MeetingWithAttendeesInfo,
  Meeting,
  MeetingWithAttendees,
} from '../../models/meeting'
import { Attendee } from '../../models/attendee'

// meetings

export function getAllMeetings(db = connection): Promise<Meeting[]> {
  return db('meetings').select('*')
}

export function addMeeting(
  meeting: Meeting,
  db = connection
): Promise<Meeting> {
  return db('meetings')
    .insert(meeting)
    .returning(['*'])
    .then((data) => data[0])
}

export function delMeeting(id: number, db = connection): Promise<number> {
  return db('meetings').where({ id }).del()
}

// attendees

export function getAllAttendees(db = connection): Promise<Attendee[]> {
  return db('attendees').select()
}

export function addAttendee(
  attendee: Attendee,
  db = connection
): Promise<Attendee> {
  return db('attendees')
    .insert(attendee)
    .returning(['*'])
    .then((data) => data[0])
}

export function delAttendee(id: number, db = connection): Promise<number> {
  return db('attendees').where({ id }).del()
}

export function getAttendeesByMeetingId(
  id: number,
  db = connection
): Promise<Attendee[]> {
  return db('meeting_attendee')
    .select('attendee_id AS id', 'wage', 'name')
    .where('meeting_id', id)
    .join('attendees', 'attendees.id', 'meeting_attendee.attendee_id')
}
