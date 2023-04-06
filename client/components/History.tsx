import OneMeeting from './OneMeeting'
import { useAppSelector } from '../hooks'
import { APIGetAllMeetings } from '../apis/apiClient'
import { MeetingWithAttendeesInfo } from '../../models/meeting'
import { useState } from 'react'

interface MeetingWithID extends MeetingWithAttendeesInfo {
  id: number
}

function History() {
  const d1 = new Date().getTime()
  const d2 = d1 - 100000000
  const d3 = d1 - 200000000

  //Old fake data calculation

  const [meeting, setMeeting] = useState(
    null as MeetingWithAttendeesInfo | null
  )

  APIGetAllMeetings()
    .then((res) => setMeeting(res))
    .catch((err) => console.log(err.message))

  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>
      {meeting &&
        meeting.map((meeting: MeetingWithID) => {
          return (
            <OneMeeting
              key={meeting.id}
              id={meeting.id}
              meeting_name={meeting.meeting_name}
              duration={meeting.duration}
              start_time={meeting.start_time}
              total_cost={meeting.total_cost}
              attendees={meeting.attendees}
              attendee_data={meeting.attendee_data}
            />
          )
        })}
    </div>
  )
}

export default History
