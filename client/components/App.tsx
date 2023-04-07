import { Routes, Route, Link } from 'react-router-dom'

import Login from './Login'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'
import Welcome from './Welcome'
import GetSalary from './GetSalary'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Graph from './Graph'
import { thunkGetMeetings } from '../actions/meetings'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks'
import OneMeetingDetails from './OneMeetingDetails'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(thunkGetMeetings())
  }, [dispatch])
  return (
    <>
      <div className="container has-text-centered">
        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 className="title is-1">$how Me The Money</h1>
            </Link>
            <Nav />
          </div>
        </div>
        <div className="">
          <IfNotAuthenticated>
            <Login />
          </IfNotAuthenticated>

          <IfAuthenticated>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/meeting" element={<Meeting />} />
              <Route path="/history" element={<History />} />
              <Route path="/history/*" element={<OneMeetingDetails />} />
              <Route path="/salary" element={<GetSalary />} />
            </Routes>
          </IfAuthenticated>
        </div>
      </div>
    </>
  )
}

export default App

// Incorporate Getsalary when we can check if they have a salary already in global state to avoid asking every time
