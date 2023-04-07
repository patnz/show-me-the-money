import { MeetingWithAttendees } from '../../models/meeting'
import { parseDuration } from '../utils'

export default function OneMeetingDetails({
  duration,
  attendee_data,
  total_cost,
  attendees,
}: MeetingWithAttendees) {
  const [hours, minutes, seconds] = parseDuration(duration)
  return (
    <>
      <br />
      <h2>Total cost: ${total_cost}</h2>
      <p>Number of Attendees: {attendees}</p>
      <p>Attendees: </p>
      <ul>
        {attendee_data.map((attendee) => (
          <li key={attendee.id}>
            {attendee.name} - Wage: ${attendee.wage}
          </li>
        ))}
      </ul>
      <p>
        Total Duration: {hours}:{(minutes.length === 1 ? '0' : '') + minutes}:
        {(seconds.length === 1 ? '0' : '') + seconds}
      </p>
    </>
  )
}
