import { combineReducers } from 'redux'
import currentMeeting from './currentMeeting'
import meetings from './meetings'
import attendees from './attendees'

export default combineReducers({
  currentMeeting,
  meetings,
  attendees,
})
