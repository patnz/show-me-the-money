import { useAppSelector } from '../hooks'
import { CurrentMeetingInfo } from '../reducers/currentMeeting'
import ActiveMeeting from './ActiveMeeting'
import SetupMeeting from './SetupMeeting'

function Meeting() {
  const currentMeeting: CurrentMeetingInfo = useAppSelector(
    (state) => state.currentMeeting
  )

  return currentMeeting.inProgress ? <ActiveMeeting /> : <SetupMeeting />
}

export default Meeting
