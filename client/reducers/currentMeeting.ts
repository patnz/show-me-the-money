import {
  MeetingAction,
  START_MEETING,
  END_MEETING,
  UPDATE_RUNNING_TOTALS,
} from '../actions/currentMeeting'
import { CurrentMeetingInfo } from '../../models/currentMeeting'

const initialState = {
  start_time: new Date(),
  inProgress: false,
  meeting_name: '',
  attendees: [],
  runningCost: 0,
  runningDuration: 0,
}

function updateRunningTotalsHelper(
  state: CurrentMeetingInfo
): CurrentMeetingInfo {
  const timeDelta = new Date().getTime() - state.start_time.getTime()
  const totalWage = state.attendees.reduce(
    (runSum, { wage }) => runSum + wage,
    0
  )
  const runningCost = (timeDelta / 1000 / 60 / 60) * totalWage
  return { ...state, runningCost, runningDuration: timeDelta }
}

function currentMeeting(state = initialState, action: MeetingAction): object {
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

export default currentMeeting
