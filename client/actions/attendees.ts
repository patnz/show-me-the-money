import { Attendee } from '../../models/attendee'

export const RECEIVE_ATTENDEES = 'RECEIVE_ATTENDEES'
export const ADD_ATTENDEE = 'ADD_ATTENDEE'

export type AttendeesAction =
  | { type: typeof RECEIVE_ATTENDEES; payload: Attendee[] }
  | { type: typeof ADD_ATTENDEE; payload: Attendee }

export function receiveAttendees(attendees: Attendee[]): AttendeesAction {
  return {
    type: RECEIVE_ATTENDEES,
    payload: attendees,
  }
}

export function addAttendee(attendee: Attendee): AttendeesAction {
  return {
    type: ADD_ATTENDEE,
    payload: attendee,
  }
}
