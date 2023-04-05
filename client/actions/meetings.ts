import type { ThunkAction } from 'redux-thunk'
//Import common
//Import functions from the api (such as fetchMeeting etc)



export const CURRENT_USER = 'CURRENT_USER'
export const ADD_USER = 'ADD_USER'


export type UserAction = 
| { type: 'CURRENT_USER; payload: //Interface for meeting details}
| { type: 'ADD_USER; payload: }


export function currentUser(user: //interface[]): UserAction {
  return {
    type: CURRENT_USER,
    payload: user,
  }
}

export function addUser(user: //interface ): UserAction {
  return {
    type: ADD_USER,
    payload: user
  }
}