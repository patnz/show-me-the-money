import OneMeeting from './OneMeeting'
import { useAppDispatch, useAppSelector } from '../hooks'
import { MeetingWithAttendees } from '../../models/meeting'
import { useEffect } from 'react'
import { thunkGetMeetings } from '../actions/meetings'

interface MeetingWithID extends MeetingWithAttendees {
  id: number
}

function History() {
  const meetings = useAppSelector((store) => store.meetings)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(thunkGetMeetings())
  }, [])

  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>
      {meetings &&
        meetings.map((meeting: MeetingWithID) => {
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
