import type { ThunkAction } from '../store'
import { MeetingWithAttendees } from '../../models/meeting'

export const RECEIVE_MEETINGS = 'RECEIVE_MEETINGS'
export const ADD_MEETING = 'ADD_MEETING'

export type MeetingsAction =
  | { type: typeof RECEIVE_MEETINGS; payload: MeetingWithAttendees[] }
  | { type: typeof ADD_MEETING; payload: MeetingWithAttendees }

export function receiveMeetings(
  meetings: MeetingWithAttendees[]
): MeetingsAction {
  return {
    type: RECEIVE_MEETINGS,
    payload: meetings,
  }
}

export function addMeeting(meeting: MeetingWithAttendees): MeetingsAction {
  return {
    type: ADD_MEETING,
    payload: meeting,
  }
}
