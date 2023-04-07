import { ChangeEvent, FormEvent, useState } from 'react'
import { AttendeeInfo } from '../../models/attendee'
import { startMeeting } from '../actions/currentMeeting'
import { useAppDispatch } from '../hooks'

type InputEvent = ChangeEvent<HTMLInputElement>

function SetupMeeting() {
  const [meetingName, setMeetingName] = useState('')
  const [members, setMembers] = useState([] as AttendeeInfo[])
  const [newMember, setNewMember] = useState({
    name: '',
    wage: '0',
  })
  const dispatch = useAppDispatch()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(startMeeting({ attendees: members, meeting_name: meetingName }))
  }

  const submitMember = (e: FormEvent) => {
    e.preventDefault()
    const wage = Number(newMember.wage)
    if (!Number.isNaN(wage)) {
      const { name } = newMember
      setMembers([...members, { name, wage }])
      setNewMember({ name: '', wage: '0' })
    }
  }

  const removeMemberAtCB = (idx: number) => {
    return () => {
      setMembers(members.filter((_, i) => i !== idx))
    }
  }

  return (
    <>
      <h1 className="title is-3">Plan Meeting</h1>
      <form onSubmit={submitHandler}>
        <label className="label" htmlFor="meeting-name">
          Meeting Name:
          <input
            className="input"
            id="meeting-name"
            name="meeting-name"
            onChange={(e: InputEvent) => setMeetingName(e.target.value)}
            value={meetingName}
          />
        </label>
        <h1 className="title is-3">Current list of Attendees:</h1>
        <ul>
          {members.map((member, i) => (
            <li key={i}>
              {member.name}{' '}
              <button
                className="button is-primary"
                type="button"
                onClick={removeMemberAtCB(i)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <button className="button is-primary">Start</button>
      </form>
      <p>Add Attendee:</p>
      <form onSubmit={submitMember}>
        <label className="label" htmlFor="member-name">
          Name:
          <input
            className="input"
            id="member-name"
            name="name"
            onChange={(e: InputEvent) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            value={newMember.name}
          />
        </label>
        <label className="label" htmlFor="wage">
          Wage: $
          <input
            className="input"
            id="member-wage"
            name="wage"
            pattern="[0-9]+(\.[0-9]{1,2})?"
            onChange={(e: InputEvent) =>
              setNewMember({ ...newMember, wage: e.target.value })
            }
            value={newMember.wage}
          />
        </label>
        <button className="button is-primary">Add</button>
      </form>
    </>
  )
}

export default SetupMeeting
