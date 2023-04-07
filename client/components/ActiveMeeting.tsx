import { useEffect } from 'react'
import { MeetingWithAttendeesInfo } from '../../models/meeting'
import { updateRunningTotals } from '../actions/currentMeeting'
import { addMeetingThunk } from '../actions/meetings'
import { useAppSelector, useAppDispatch } from '../hooks'

function parseDuration(duration: number): [string, string, string] {
  const seconds = Math.round(duration / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
  return [hours, minutes % 60, seconds % 60].map((n) => n.toString()) as [
    string,
    string,
    string
  ]
}

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
      <h1>Name: {currentMeeting.meeting_name}</h1>
      <p>
        Attendees:
        <ul>
          {currentMeeting.attendees.map((e, i) => {
            return <li key={i}>{e.name}</li>
          })}
        </ul>
      </p>
      <p>Current meeting length:</p>
      <p>
        {hours}:{(minutes.length === 1 ? '0' : '') + minutes}:
        {(seconds.length === 1 ? '0' : '') + seconds}
      </p>
      <p>This meeting cost:</p>
      <p>{dollars}</p>
      <button onClick={handleEndMeeting}>End meeting</button>
    </>
  )
}

export default ActiveMeeting
