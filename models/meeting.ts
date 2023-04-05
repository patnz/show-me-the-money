import { Attendee } from './attendee'

export interface MeetingInfo {
  meeting_name: string
  duration: number
  start_time: Date
  total_cost: number
  attendees: number
}

export interface MeetingWithAttendeesInfo extends MeetingInfo {
  attendee_data: Attendee[]
}

export interface Meeting extends MeetingInfo {
  id: number
}

export interface MeetingWithAttendees extends MeetingWithAttendeesInfo {
  id: number
}
