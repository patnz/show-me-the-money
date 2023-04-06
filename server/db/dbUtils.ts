import {
  MeetingWithAttendeesInfo,
  MeetingWithAttendees,
} from '../../models/meeting'

import * as db from './db'

export async function getMeetingsWithAttendees(): Promise<
  MeetingWithAttendeesInfo[]
> {
  const meetings = await db.getAllMeetings()
  const newMeetingsArr = [] as MeetingWithAttendees[]

  for (const meeting of meetings) {
    const currentId = meeting.id
    const currentAttendees = await db.getAttendeesByMeetingId(currentId)
    const newMeetingObj = { ...meeting, attendee_data: currentAttendees }
    newMeetingsArr.push(newMeetingObj)
  }
  return newMeetingsArr
}

export async function getOneMeetingByIdWithAttendees(
  id: number
): Promise<MeetingWithAttendees> {
  const meeting = await db.getOneMeetingById(id)

  const currentId = meeting.id
  const currentAttendees = await db.getAttendeesByMeetingId(currentId)
  return { ...meeting, attendee_data: currentAttendees }
}

export async function addMeetingWithAttendees(
  meeting: MeetingWithAttendeesInfo
): Promise<MeetingWithAttendees> {
  const attendeesData = { ...meeting }.attendee_data

  const { meeting_name, duration, start_time, total_cost, attendees } = meeting

  const meetingWithoutAttendees = {
    meeting_name,
    duration,
    start_time,
    total_cost,
    attendees,
  }

  const addedMeeting = await db.addMeeting(meetingWithoutAttendees)
  const currentMeetingId = addedMeeting.id

  for (const attendee of attendeesData) {
    const addedAttendee = await db.addAttendee(attendee)
    const currentAttendeeId = addedAttendee.id
    await db.relateMeetingAndAttendee(currentMeetingId, currentAttendeeId)
  }

  return await getOneMeetingByIdWithAttendees(currentMeetingId)
}
