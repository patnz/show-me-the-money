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

export async function getMeetingsWithAttendees(): Promise<
  MeetingWithAttendeesInfo[]
> {
  const meetings = await getAllMeetings()

  const newMeetingsArr = [] as MeetingWithAttendees[]

  for (const meeting of meetings) {
    const currentId = meeting.id

    const currentAttendees = await getAttendeesByMeetingId(currentId)

    const newMeetingObj = { ...meeting, attendee_data: currentAttendees }

    newMeetingsArr.push(newMeetingObj)
  }
  return newMeetingsArr
}

// todo: write function that takes a MeetingWithAttendeesInfo object as a parameter

//receive MeetingWithAttendeesInfo as data from front end
//get current meeting id
//for each attendee in the current meeting
//-----//add attendee to attendees table
//-----//add entry to link attendee and meeting in join table
//remove attendees data array from meeting object
//add meeting to meetings table

//write function that gets attendee_id and meeting_id and adds to join table
