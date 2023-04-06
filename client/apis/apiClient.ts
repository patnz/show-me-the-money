import request from 'superagent'
import { MeetingWithAttendeesInfo } from '../../models/meeting'

const meetingRoute = '/api/v1/meetings/attendee-data'

export function APIGetAllMeetings() {
  return request
    .get(meetingRoute)
    .then((res) => res.body)
    .then((meetings) =>
      meetings.map((meeting: MeetingWithAttendeesInfo) => {
        return {
          ...meeting,
          start_time: new Date(meeting.start_time),
        }
      })
    )
}

export function APIAddMeeting(meeting: MeetingWithAttendeesInfo) {
  return request
    .post(meetingRoute)
    .send(meeting)
    .then((res) => res.body)
}
