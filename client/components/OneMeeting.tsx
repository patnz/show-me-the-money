import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks'

function OneMeeting(props: any) {
  const dateString = new Date(props.date).toLocaleDateString()

  // const dispatch = useAppDispatch()a

  const fakeClickHandler = () => {
    console.log('clicked delete!')
  }

  // const deleteMeeting = (date: number) => {
  //   dispatchEvent(deleteMeetingThunk(date))
  // }
  //swap over when backend ready

  return (
    <>
      <div className="container has-text-centered">
        <h3 className="title is-3">{props.title}</h3>
        <p>Date: {dateString}</p>
        <Link to={'/history/' + props.date}>More details...</Link>
        <button onClick={() => fakeClickHandler()}>delete</button>
      </div>
    </>
  )
}

export default OneMeeting
