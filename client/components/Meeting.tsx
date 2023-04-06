import ActiveMeeting from './ActiveMeeting'
import SetupMeeting from './SetupMeeting'

function Meeting() {
  const meetingInProgress = true // placeholder

  // return meetingInProgress ? <ActiveMeeting /> : <SetupMeeting />
}

export default Meeting

// start with a simple ternary - if meeting not running show setup form else show meeting in progress
// name, list of attendees, form for adding and removing attendees
// send all data to reducer
