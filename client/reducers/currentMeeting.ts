import {
  MeetingAction,
  START_MEETING,
  END_MEETING,
  TICK_ONE_SECOND,
  RESET_MEETING,
} from '../actions/currentMeeting'
import { Attendee } from '../../models/attendee'

interface CurrentMeetingInfo extends StartMeetingPayload {
  start_time: Date
  runningCost: number
  runningDuration: number
}

export interface StartMeetingPayload {
  meeting_name: string
  attendess: Attendee[]
}

const initialState: [] = []

function meetingReducer(state = initialState, action: MeetingAction): object {
  const { type, payload } = action

  switch (type) {
    case START_MEETING:
      return payload
    case END_MEETING:
      return payload
    case TICK_ONE_SECOND:
      return payload
    case RESET_MEETING:
      return payload
    default:
      return state
  }
}

export default meetingReducer
