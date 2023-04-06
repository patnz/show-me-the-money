import {
  MeetingAction,
  START_MEETING,
  END_MEETING,
  UPDATE_RUNNING_TOTALS,
  // RESET_MEETING,
} from '../actions/currentMeeting'
import { Attendee } from '../../models/attendee'

interface CurrentMeetingInfo extends StartMeetingPayload {
  start_time: Date
  inProgress: boolean
  runningCost: number
  runningDuration: number
}

export interface StartMeetingPayload {
  meeting_name: string
  attendess: Attendee[]
}

const initialState = {
  start_time: new Date(),
  inProgress: false,
  meeting_name: '',
  attendess: [],
  runningCost: 0,
  runningDuration: 0,
} as CurrentMeetingInfo

function updateRunningTotalsHelper(
  state: CurrentMeetingInfo
): CurrentMeetingInfo {
  const timeDelta = new Date().getTime() - state.start_time.getTime()
  const totalWage = state.attendess.reduce(
    (runSum, { wage }) => runSum + wage,
    0
  )
  const runningCost = (timeDelta / 1000 / 60 / 60) * totalWage
  return { ...state, runningCost, runningDuration: timeDelta }
}

function meetingReducer(state = initialState, action: MeetingAction): object {
  const { type, payload } = action

  switch (type) {
    case START_MEETING:
      return {
        ...payload,
        start_time: new Date(),
        inProgress: true,
        runningTime: 0,
        runningCost: 0,
      }
    case END_MEETING:
      return initialState
    case UPDATE_RUNNING_TOTALS:
      return state.inProgress ? updateRunningTotalsHelper(state) : state

    default:
      return state
  }
}

export default meetingReducer
