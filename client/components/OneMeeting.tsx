import { MeetingWithAttendees } from '../../models/meeting'
import OneMeetingDetails from './OneMeetingDetails'
import { useState } from 'react'

function OneMeeting(props: MeetingWithAttendees) {
  const dateString = new Date(props.start_time).toLocaleDateString()

  const [isDisplayed, setIsDisplayed] = useState(false)

  const clickHandler = () => {
    setIsDisplayed(!isDisplayed)
  }

  return (
    <>
      <div className="hero is-light has-text-centered">
        <h3 className="title is-3">{props.meeting_name}</h3>
        <p>Date: {dateString}</p>
        {!isDisplayed ? (
          <button className="button is-primary" onClick={clickHandler}>
            Show Details
          </button>
        ) : (
          <>
            <OneMeetingDetails
              attendee_data={props.attendee_data}
              duration={props.duration}
              total_cost={props.total_cost}
              attendees={props.attendees}
              id={props.id}
              meeting_name={props.meeting_name}
              start_time={props.start_time}
            />
            <button className="button is-primary" onClick={clickHandler}>
              Hide Details
            </button>
          </>
        )}

        <br />
      </div>
    </>
  )
}

export default OneMeeting
