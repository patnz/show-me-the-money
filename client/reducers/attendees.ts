import {
  AttendeesAction,
  RECEIVE_ATTENDEES,
  ADD_ATTENDEE,
} from '../actions/attendees'

import { Attendee } from '../../models/attendee'

const initialState = [] as Attendee[]

function attendees(state = initialState, action: AttendeesAction): Attendee[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ATTENDEES:
      return payload
    case ADD_ATTENDEE:
      return [...state, payload]
    default:
      return state
  }
}

export default attendees
