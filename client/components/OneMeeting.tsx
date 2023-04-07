import { Link } from 'react-router-dom'
import { MeetingWithAttendees } from '../../models/meeting'
import { useAppDispatch } from '../hooks'
import OneMeetingDetails from './OneMeetingDetails'

function OneMeeting(props: MeetingWithAttendees) {
  const dateString = new Date(props.start_time).toLocaleDateString()

  // const dispatch = useAppDispatch()a

  const deleteMeeting = (id: number) => {
    return () => {
      // dispatchEvent(deleteMeetingThunk(id))
    }
  }
  //swap over when backend ready

  return (
    <>
      <div className="hero is-light has-text-centered">
        <h3 className="title is-3">{props.meeting_name}</h3>
        <p>Date: {dateString}</p>
        <Link className="button" to={'/history/' + props.id}>
          More details...
        </Link>
        <button
          className="button is-primary hero"
          onClick={deleteMeeting(props.id)}
        >
          delete
        </button>
      </div>
    </>
  )
}

export default OneMeeting
