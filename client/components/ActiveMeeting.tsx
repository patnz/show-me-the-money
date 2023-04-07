import { useEffect } from 'react'
import { MeetingWithAttendeesInfo } from '../../models/meeting'
import { updateRunningTotals } from '../actions/currentMeeting'
import { addMeetingThunk } from '../actions/meetings'
import { useAppSelector, useAppDispatch } from '../hooks'
import { parseDuration } from '../utils'

function ActiveMeeting() {
  const currentMeeting = useAppSelector((state) => state.currentMeeting)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateRunningTotals())
    }, 1000)
    return () => clearInterval(interval)
  }, [dispatch])

  const dollars = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currentMeeting.runningCost)

  const [hours, minutes, seconds] = parseDuration(
    currentMeeting.runningDuration
  )

  const handleEndMeeting = () => {
    const meeting: MeetingWithAttendeesInfo = {
      meeting_name: currentMeeting.meeting_name,
      start_time: currentMeeting.start_time,
      duration: currentMeeting.runningDuration,
      total_cost: currentMeeting.runningCost,
      attendee_data: currentMeeting.attendees,
      attendees: currentMeeting.attendees.length,
    }
    dispatch(addMeetingThunk(meeting))
  }

  return (
    <>
      <h1 className="title is-3">Name: {currentMeeting.meeting_name}</h1>
      <p className="title is-3">
        Attendees:
        <ul>
          {currentMeeting.attendees.map((e, i) => {
            return <li key={i}>{e.name}</li>
          })}
        </ul>
      </p>
      <p className="title is-4">Current meeting length:</p>
      <p className="title is-1" style={{ color: 'red' }}>
        {hours}:{(minutes.length === 1 ? '0' : '') + minutes}:
        {(seconds.length === 1 ? '0' : '') + seconds}
      </p>
      <p className="title is-2">This meeting cost:</p>
      <p className="title is-1" style={{ color: 'red' }}>
        {dollars}
      </p>
      <button onClick={handleEndMeeting}>End meeting</button>
    </>
  )
}

export default ActiveMeeting
