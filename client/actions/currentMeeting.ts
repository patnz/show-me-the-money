import type { ThunkAction } from 'redux-thunk'
import { Atendee } from '../../models/attendee'
import { MeetingInfo } from '../../models/meeting'
import { StartMeetingPayload } from '../reducers/currentMeeting'
//Import common
//Import functions from the api (such as fetchMeeting etc)

export const START_MEETING = 'START_MEETING'
export const END_MEETING = 'END_MEETING'
export const TICK_ONE_SECOND = 'TICK_ONE_SECOND'
export const RESET_MEETING = 'RESET_MEETING'

export type MeetingAction =
  | { type: 'START_MEETING'; payload: StartMeetingPayload }
  | { type: 'END_MEETING'; payload: null }
  | { type: 'TICK_ONE_SECOND'; payload: null }
  | { type: 'RESET_MEETING'; payload: null }

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

export function tickOneSecond(): MeetingAction {
  return {
    type: TICK_ONE_SECOND,
    payload: null,
  }
}

export function resetMeeting(): MeetingAction {
  return {
    type: RESET_MEETING,
    payload: null,
  }
}
