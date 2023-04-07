import { Link } from 'react-router-dom'
import { MeetingWithAttendees } from '../../models/meeting'
import { useAppDispatch, useAppSelector } from '../hooks'
import OneMeetingDetails from './OneMeetingDetails'
import { useState } from 'react'
import meetings from '../reducers/meetings'

function OneMeeting(props: MeetingWithAttendees) {
  const dateString = new Date(props.start_time).toLocaleDateString()

  const [isDisplayed, setIsDisplayed] = useState(false)

  const meetings = useAppSelector((state) => state.meetings)

  // const dispatch = useAppDispatch()a

  const clickHandler = () => {
    setIsDisplayed(!isDisplayed)
  }

  const deleteMeeting = (id: number) => {
    return () => {
      // dispatchEvent(deleteMeetingThunk(id))
    }
  }
  //swap over when backend ready

  return (
    <>
      <div className="container has-text-centered" onClick={clickHandler}>
        <h3 className="title is-3">{props.meeting_name}</h3>
        <p>Date: {dateString}</p>
        {isDisplayed && (
          <OneMeetingDetails
            meeting_name={props.meeting_name}
            attendee_data={props.attendee_data}
            duration={props.duration}
            total_cost={props.total_cost}
            attendees={props.attendees}
          />
        )}
        <br />

        {/* <Link to={'/history/' + props.id}>More details...</Link>
        <button onClick={deleteMeeting(props.id)}>delete</button> */}
      </div>
    </>
  )
}

export default OneMeeting
