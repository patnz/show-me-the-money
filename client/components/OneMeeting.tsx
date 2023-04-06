import { Link } from 'react-router-dom'
import { MeetingWithAttendees } from '../../models/meeting'
import { useAppDispatch } from '../hooks'

function OneMeeting(props: MeetingWithAttendees) {
  const dateString = new Date(props.duration).toLocaleDateString()

  // const dispatch = useAppDispatch()a

  const deleteMeeting = (id: number) => {
    return () => {
      // dispatchEvent(deleteMeetingThunk(id))
    }
  }
  //swap over when backend ready

  return (
    <>
      <div className="container has-text-centered">
        <h3 className="title is-3">{props.meeting_name}</h3>
        <p>Date: {dateString}</p>
        <Link to={'/history/' + props.id}>More details...</Link>
        <button onClick={deleteMeeting(props.id)}>delete</button>
      </div>
    </>
  )
}

export default OneMeeting
