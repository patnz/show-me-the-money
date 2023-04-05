import { Link } from 'react-router-dom'

function OneMeeting(props: any) {
  const clickHandler = () => {
    console.log('clicked delete!')
  }

  return (
    <>
      <div className="container has-text-centered">
        <h3 className="title is-3">{props.title}</h3>
        <p>{props.date}</p>
        <Link to={'/history/' + props.tag}>More details...</Link>
        <button onClick={clickHandler}>delete</button>
      </div>
    </>
  )
}

export default OneMeeting
