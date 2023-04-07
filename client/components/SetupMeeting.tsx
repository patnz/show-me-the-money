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
    wage: '',
  })
  const dispatch = useAppDispatch()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(startMeeting({ attendees: members, meeting_name: meetingName }))
  }

  const submitMember = (e: FormEvent) => {
    e.preventDefault()
    const wage = Number(newMember.wage)
    if (Number.isNaN(wage)) {
      alert(`${newMember.wage} is not a number`)
    } else {
      const { name } = newMember
      setMembers([...members, { name, wage }])
      setNewMember({ name: '', wage: '' })
    }
  }

  const removeMemberAtCB = (idx: number) => {
    setMembers(members.filter((_, i) => i !== idx))
  }

  return (
    <>
      <h1>Plan Meeting</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="meeting-name">
          Meeting Name:
          <input
            id="meeting-name"
            name="meeting-name"
            onChange={(e: InputEvent) => setMeetingName(e.target.value)}
            value={meetingName}
          />
        </label>
        <p>Planned attendees:</p>
        <ul>
          {members.map((member, i) => (
            <li key={i}>
              {member.name}{' '}
              <button type="button" onClick={() => removeMemberAtCB(i)}>
                X
              </button>
            </li>
          ))}
        </ul>
        <button disabled={!members.length}>Start</button>
      </form>
      <p>Add Attendee:</p>
      <form onSubmit={submitMember}>
        <label htmlFor="member-name">
          Name:
          <input
            id="member-name"
            name="name"
            onChange={(e: InputEvent) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            value={newMember.name}
          />
        </label>
        <label htmlFor="wage">
          Wage: $
          <input
            id="member-wage"
            name="wage"
            pattern="[0-9]+(\.[0-9]{1,2})?"
            onChange={(e: InputEvent) =>
              setNewMember({ ...newMember, wage: e.target.value })
            }
            value={newMember.wage}
          />
        </label>
        <button
          disabled={Object.values(newMember).some(
            (value) => value.length === 0
          )}
        >
          Add
        </button>
      </form>
    </>
  )
}

export default SetupMeeting
