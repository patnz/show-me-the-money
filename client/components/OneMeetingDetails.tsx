import attendees from '../reducers/attendees'

export default function OneMeetingDetails({
  meeting_name,
  duration,
  attendee_data,
  total_cost,
  antendees,
}) {
  return (
    <>
      <br />
      <h2>Total cost: ${total_cost}</h2>
      <p>
        Attendees:{' '}
        <ul>
          {attendee_data.map((attendee) => (
            <li key={attendee.id}>
              {attendee.name} - Wage: ${attendee.wage}
            </li>
          ))}
        </ul>
      </p>
      <p>Total Duration: {duration / 60000} minutes</p>
    </>
  )
}
