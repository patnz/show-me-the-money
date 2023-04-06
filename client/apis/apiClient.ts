import request from 'superagent'
import { MeetingWithAttendeesInfo } from '../../models/meeting'

const meetingRoute = '/api/meetings'

export function APIGetAllMeetings() {
  return request
    .get(meetingRoute + '/attendee-data')
    .then((res) => {
      return res.body
    })
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
    .then((meeting) => {
      return {
        ...meeting,
        start_time: new Date(meeting.start_time),
      }
    })
}
