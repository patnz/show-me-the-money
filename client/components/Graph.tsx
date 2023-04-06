import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useAppSelector } from '../hooks'

function Graph() {
  // REPLACE MEETING WITH REAL DATA

  const meetings = [
    {
      id: 1,
      meeting_name: 'talking about isaac',
      duration: 3600000,
      start_time: new Date(1680570000000),
      total_cost: 13234,
      attendees: 4,
    },
    {
      id: 2,
      meeting_name: 'talking about pat',
      duration: 3600000,
      start_time: new Date(1677981600000),
      total_cost: 20145,
      attendees: 2,
    },
    {
      id: 3,
      meeting_name: 'fun time',
      duration: 3600000,
      start_time: new Date(1680292800000),
      total_cost: 54132,
      attendees: 3,
    },
  ]

  const totalByMonth = meetings.reduce(
    (accumulator, oneMeeting) => {
      const month = oneMeeting.start_time.getMonth()
      accumulator[month] += oneMeeting.total_cost
      return accumulator
    },
    {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    } as Record<number, number>
  )

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const data = {
    labels: labels,
    datasets: [
      {
        label: '2023 Google Meeting Costs',
        data: Object.values(totalByMonth),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
      },
    ],
  }

  Chart.register({})

  return (
    <>
      <Line data={data} options={{ scales: { x: { type: 'category' } } }} />
    </>
  )
}

export default Graph
