import { ChangeEvent, FormEvent, useState } from 'react'
import { AttendeeInfo } from '../../models/attendee'

function SetupMeeting() {
  const [meetingName, setMeetingName] = useState('')
  const [members, setMembers] = useState([] as AttendeeInfo[])
  const [newMember, setNewMember] = useState({
    name: '',
    wage: 0,
  } as AttendeeInfo)

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(`TODO: submit with name ${meetingName} and attendees ${members}`)
  }

  function submitMember(e: FormEvent) {
    e.preventDefault()
    const wage = Number(newMember.wage)
    if (!Number.isNaN(wage)) {
      const { name } = newMember
      setMembers([...members, { name, wage }])
      setNewMember({ name: '', wage: 0 })
    }
  }

  function changeMeeting(e: ChangeEvent<HTMLInputElement>) {
    setMeetingName(e.target.value)
  }

  function changeMember(e: ChangeEvent<HTMLInputElement>) {
    setNewMember({ ...newMember, [e.target.name]: e.target.value })
  }

  function removeMemberAtCB(idx: number) {
    return () => {
      setMembers(members.filter((_, i) => i !== idx))
    }
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
            onChange={changeMeeting}
            value={meetingName}
          ></input>
        </label>
        <p>Planned attendees:</p>
        <ul>
          {members.map((member, i) => (
            <li key={i}>
              {member.name}{' '}
              <button type="button" onClick={removeMemberAtCB(i)}>
                X
              </button>
            </li>
          ))}
        </ul>
        <button>Start</button>
      </form>
      <p>Add Attendee:</p>
      <form onSubmit={submitMember}>
        <label htmlFor="member-name">
          Name:
          <input
            id="member-name"
            name="name"
            onChange={changeMember}
            value={newMember.name}
          ></input>
        </label>
        <label htmlFor="wage">
          Wage: $
          <input
            id="member-wage"
            name="wage"
            pattern="[0-9]+(\.[0-9]{1,2})?"
            onChange={changeMember}
            value={newMember.wage}
          ></input>
        </label>
        <button>Add</button>
      </form>
    </>
  )
}

export default SetupMeeting
