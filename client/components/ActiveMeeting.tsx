import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from '../../server/public/bundle'

function ActiveMeeting() {
  const fakeData = {
    meeting_name: 'Google meet',
    duration: 4505000, // Should print 01:15
    start_time: 1680570000000,
    total_cost: 789.3587594,
    attendees: 7,
    attendee_data: ['john', 'jeff', 'joe'],
  }

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

  // const getAmPm = () => {
  //   if (hours > 12) {
  //     return 'pm'
  //   } else {
  //     return 'am'
  //   }
  // } just leaving here cause its hype

  return (
    <>
      <h1>Name: {fakeData.meeting_name}</h1>
      <p>
        Attendees:
        <ul>
          {fakeData.attendee_data.map((e, i) => {
            return <li key={i}>{e}</li>
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
