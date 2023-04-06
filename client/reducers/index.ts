import { combineReducers } from 'redux'
import currentMeetingReducer from './currentMeeting'
import meetingsReducer from './meetings'
import usersReducer from './users'

export default combineReducers({
  currentMeetingReducer,
  meetingsReducer,
  usersReducer,
})
