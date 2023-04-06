import type { ThunkAction } from '../store'
import {
  MeetingWithAttendees,
  MeetingWithAttendeesInfo,
} from '../../models/meeting'
import { APIAddMeeting } from '../apis/apiClient'
import { endMeeting } from './currentMeeting'
import { APIGetAllMeetings } from '../apis/apiClient'

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

// ** THUNKS ** \\

export function addMeetingThunk(
  meeting: MeetingWithAttendeesInfo
): ThunkAction {
  return (dispatch) => {
    return APIAddMeeting(meeting).then(
      (returnedMeeting: MeetingWithAttendees) => {
        dispatch(addMeeting(returnedMeeting))
        dispatch(endMeeting)
      }
    )
  }
}

export function thunkGetMeetings(): ThunkAction {
  return (dispatch) => {
    return APIGetAllMeetings()
      .then((meetings: MeetingWithAttendees[]) => {
        dispatch(receiveMeetings(meetings))
      })
      .catch((err: Error) => console.log(err.message))
  }
}
