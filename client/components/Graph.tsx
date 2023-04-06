import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function Graph() {
  const meetings = [
    {
      id: 1,
      meeting_name: 'talking about isaac',
      duration: 3600000,
      start_time: 1680570000000,
      total_cost: null,
      attendees: 4,
    },
    {
      id: 2,
      meeting_name: 'talking about pat',
      duration: 3600000,
      start_time: 1677981600000,
      total_cost: null,
      attendees: 2,
    },
    {
      id: 3,
      meeting_name: 'fun time',
      duration: 3600000,
      start_time: 1680292800000,
      total_cost: null,
      attendees: 3,
    },
  ]

  const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Week of 3rd April 2023 Meeting Costs',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  Chart.register({
    id: 'category',
    parse: function (value) {
      return value.toString()
    },
    isNumeric: false,
    determineDataLimits: function () {},
  })

  return (
    <>
      <Line data={data} options={{ scales: { x: { type: 'category' } } }} />
    </>
  )
}

export default Graph
