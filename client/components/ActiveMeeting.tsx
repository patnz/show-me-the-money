import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'

function ActiveMeeting() {
  const fakeData = {
    meeting_name: 'Google meet',
    duration: 4505000, // Should print 01:15
    start_time: 1680570000000,
    total_cost: 789.3587594,
    attendees: 7,
    attendee_data: [
      {
        id: 1,
        wage: 25,
        name: 'Kelly',
      },
      {
        id: 2,
        wage: 25,
        name: 'Shrena',
      },
      {
        id: 3,
        wage: 25,
        name: 'Josh',
      },
    ],
  }

  // const data = useAppSelector((state) => state.data)

  // const dispatch = useAppDispatch()

  const [meeting, setMeeting] = useState(fakeData)

  useEffect(() => {
    const interval = setInterval(() => {
      fakeData.duration += 1000

      setMeeting({
        ...fakeData,
        duration: fakeData.duration + 1000,
      })

      //dispatch(data)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const dollars = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(fakeData.total_cost)

  const hours = new Date(fakeData.duration).getHours()
  const minutes = new Date(fakeData.duration).getMinutes()
  const seconds = new Date(fakeData.duration).getSeconds()

  const getHours = () => {
    if (hours > 12) {
      return `0${hours - 12}`
    } else {
      return hours
    }
  }

  const getMinutes = () => {
    if (minutes < 10) {
      return `0${minutes}`
    } else {
      return minutes
    }
  }

  const getSeconds = () => {
    if (seconds < 10) {
      return `0${seconds}`
    } else {
      return seconds
    }
  }

  return (
    <>
      <h1>Name: {fakeData.meeting_name}</h1>
      <p>
        Attendees:
        <ul>
          {fakeData.attendee_data.map((e, i) => {
            return <li key={e.id}>{e.name}</li>
          })}
        </ul>
      </p>
      <p>Current meeting length:</p>
      <p>
        {getHours()}:{getMinutes()}:{getSeconds()}
      </p>
      <p>This meeting cost:</p>
      <p>{dollars}</p>
      <button>End meeting</button>
    </>
  )
}

export default ActiveMeeting
