import type { ThunkAction } from '../store'
import { Attendee } from '../../models/attendee'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

export type UsersAction =
  | { type: typeof RECEIVE_USERS; payload: Attendee[] }
  | { type: typeof ADD_USER; payload: Attendee }

export function receiveUsers(users: Attendee[]): UsersAction {
  return {
    type: RECEIVE_USERS,
    payload: users,
  }
}

export function addUser(user: Attendee): UsersAction {
  return {
    type: ADD_USER,
    payload: user,
  }
}
