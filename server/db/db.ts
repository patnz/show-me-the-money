import connection from './connection'
import {
  MeetingWithAttendeesInfo,
  Meeting,
  MeetingWithAttendees,
  MeetingInfo,
} from '../../models/meeting'
import { Attendee, AttendeeInfo } from '../../models/attendee'

// meetings

export function getAllMeetings(db = connection): Promise<Meeting[]> {
  return db('meetings').select('*')
}

export function getOneMeetingById(
  id: number,
  db = connection
): Promise<Meeting> {
  return db('meetings').select('*').where('id', id).first()
}

export function addMeeting(
  meeting: MeetingInfo,
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
  attendee: AttendeeInfo,
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

// meeting_attendee

export function relateMeetingAndAttendee(
  meetingId: number,
  attendeeId: number,
  db = connection
) {
  return db('meeting_attendee').insert({
    meeting_id: meetingId,
    attendee_id: attendeeId,
  })
}
