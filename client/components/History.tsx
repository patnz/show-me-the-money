import OneMeeting from './OneMeeting'
import Graph from './Graph'
import { useAppSelector } from '../hooks'
import { MeetingWithAttendees } from '../../models/meeting'

function History() {
  const meetings = useAppSelector((store) => store.meetings)

  return (
    <>
      <div className="container box">
        <h2 className="title is-2">Meeting history</h2>
        {meetings &&
          meetings.map((meeting: MeetingWithAttendees) => {
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
      <Graph />
    </>
  )
}

export default History
