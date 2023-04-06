import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <div className="container has-text-centered">
        <h1 className="welcome-text">Welcome to $how Me The Money!</h1>
      </div>
      <ul>
        <li>
          <Link to="/meeting">Start meeting</Link>
        </li>
        <li>
          <Link to="history">Meeting history</Link>
        </li>
      </ul>
    </>
  )
}

export default Welcome
