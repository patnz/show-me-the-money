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
  }

  function submitMember(e: FormEvent) {
    e.preventDefault()
    setMembers([...members, newMember])
  }

  function changeMeeting(e: ChangeEvent<HTMLInputElement>) {
    setMeetingName(e.target.value)
  }

  function changeMemberName(e: ChangeEvent<HTMLInputElement>) {
    setNewMember({ ...newMember, name: e.target.value })
  }

  function changeMemberWage(e: ChangeEvent<HTMLInputElement>) {
    // convert input to a number
    const wage = Number(e.target.value)
    if (!Number.isNaN(wage)) {
      setNewMember({ ...newMember, wage })
    }
  }

  return (
    <>
      <h1>Plan Meeting</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="meeting-name">
          <input
            id="meeting-name"
            name="meeting-name"
            onChange={changeMeeting}
            value={meetingName}
          ></input>
        </label>

        <form onSubmit={submitMember}>
          <label htmlFor="member-name">
            <input
              id="member-name"
              name="member-name"
              onChange={changeMemberName}
            ></input>
          </label>
          <label htmlFor="wage">
            <input
              id="member-wage"
              name="member-wage"
              onChange={changeMemberWage}
            ></input>
          </label>
        </form>
      </form>
    </>
  )
}

export default SetupMeeting
