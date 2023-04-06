import { UsersAction, RECEIVE_USERS, ADD_USER } from '../actions/users'

import { Attendee } from '../../models/attendee'

const initialState = [] as Attendee[]

function usersReducer(state = initialState, action: UsersAction): Attendee[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_USERS:
      return payload
    case ADD_USER:
      return [...state, payload]
    default:
      return state
  }
}

export default usersReducer
