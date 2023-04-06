import {
  MeetingWithAttendeesInfo,
  MeetingWithAttendees,
} from '../../models/meeting'

import { getAllMeetings, getAttendeesByMeetingId } from './db'

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

// export function deconstructData(meetingsWithAttendees: MeetingWithAttendees): {}

//receive MeetingWithAttendeesInfo as data from front end
//get current meeting id
//for each attendee in the current meeting
//-----//add attendee to attendees table
//-----//add entry to link attendee and meeting in join table
//remove attendees data array from meeting object
//add meeting to meetings table

//write function that gets attendee_id and meeting_id and adds to join table
