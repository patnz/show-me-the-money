import {
  MeetingsAction,
  RECEIVE_MEETINGS,
  ADD_MEETING,
} from '../actions/meetings'

import { MeetingWithAttendees } from '../../models/meeting'

const initialState = [] as MeetingWithAttendees[]

function meetingsReducer(
  state = initialState,
  action: MeetingsAction
): MeetingWithAttendees[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MEETINGS:
      return payload
    case ADD_MEETING:
      return [...state, payload]
    default:
      return state
  }
}

export default meetingsReducer
