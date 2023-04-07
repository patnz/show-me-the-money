import { AttendeeInfo } from '../models/attendee'

export interface CurrentMeetingInfo extends StartMeetingPayload {
  start_time: Date
  inProgress: boolean
  runningCost: number
  runningDuration: number
}

export interface StartMeetingPayload {
  meeting_name: string
  attendees: AttendeeInfo[]
}
