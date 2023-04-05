import OneMeeting from './OneMeeting'
import { useAppSelector } from '../hooks'

function History() {
  const fakeDataArr = [
    { title: 'Meeting One', date: '17/04/93', id: 1 },
    { title: 'Meeting Two', date: '18/04/93', id: 2 },
    { title: 'Meeting Three', date: '19/04/93', id: 3 },
  ]

  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>
      {fakeDataArr.map((e, i) => {
        return <OneMeeting key={i} title={e.title} date={e.date} tag={e.id} />
      })}
    </div>
  )
}

export default History
