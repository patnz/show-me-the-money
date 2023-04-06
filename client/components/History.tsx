import OneMeeting from './OneMeeting'
import { useAppSelector } from '../hooks'

function History() {
  const d1 = new Date().getTime()
  const d2 = d1 - 100000000
  const d3 = d1 - 200000000

  const fakeDataArr = [
    {
      id: 1,
      meeting_name: 'Meeting One',
      duration: 10,
      start_time: d1,
      total_cost: 100000,
      attendees: 10,
    },
    {
      id: 2,
      meeting_name: 'Meeting Two',
      duration: 10,
      start_time: d2,
      total_cost: 120000,
      attendees: 10,
    },
    {
      id: 3,
      meeting_name: 'Meeting Three',
      duration: 10,
      start_time: d3,
      total_cost: 300000,
      attendees: 10,
    },
  ]
  // const meetings = useAppSelector((state) => state.data)

  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>
      {fakeDataArr.map((e) => {
        return (
          <OneMeeting
            key={e.id}
            idNum={e.id}
            title={e.meeting_name}
            duration={e.duration}
            date={e.start_time}
            cost={e.total_cost}
            attendees={e.attendees}
          />
        )
      })}
    </div>
  )
}

export default History
