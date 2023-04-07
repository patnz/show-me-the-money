import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <div className="container has-margin-top-1">
        <h1 className="title is-1">Welcome to $how Me The Money!</h1>
        <h2 className="subtitle is-4">
          A place to put your money where your mouth is...
        </h2>
        <h3 className="subtitle is-6">
          (and calculate exactly how much that boring meeting cost the company)
        </h3>

        <Link className="button is-primary is-normal" to="/meeting">
          Start meeting
        </Link>

        <Link className="button is-primary is-normal" to="/history">
          Meeting history
        </Link>
        <Link className="button is-primary is-normal" to="/salary">
          Salary
        </Link>
      </div>
    </>
  )
}

export default Welcome
