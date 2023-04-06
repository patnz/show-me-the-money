// import type { ThunkAction } from 'redux-thunk'
import { StartMeetingPayload } from '../reducers/currentMeeting'

export const START_MEETING = 'START_MEETING'
export const END_MEETING = 'END_MEETING'
export const UPDATE_RUNNING_TOTALS = 'UPDATE_RUNNING_TOTALS'

export type MeetingAction =
  | { type: 'START_MEETING'; payload: StartMeetingPayload }
  | { type: 'END_MEETING'; payload: null }
  | { type: 'UPDATE_RUNNING_TOTALS'; payload: null }

export function startMeeting(meeting: StartMeetingPayload): MeetingAction {
  return {
    type: START_MEETING,
    payload: meeting,
  }
}

export function endMeeting(): MeetingAction {
  return {
    type: END_MEETING,
    payload: null,
  }
}

export function updateRunningTotals(): MeetingAction {
  return {
    type: UPDATE_RUNNING_TOTALS,
    payload: null,
  }
}
