import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function Graph() {
  const meetings = [
    {
      id: 1,
      meeting_name: 'talking about isaac',
      duration: 3600000,
      start_time: 1680570000000,
      total_cost: 13234,
      attendees: 4,
    },
    {
      id: 2,
      meeting_name: 'talking about pat',
      duration: 3600000,
      start_time: 1677981600000,
      total_cost: 20145,
      attendees: 2,
    },
    {
      id: 3,
      meeting_name: 'fun time',
      duration: 3600000,
      start_time: 1680292800000,
      total_cost: 54132,
      attendees: 3,
    },
    {
      total_cost: 52134,
    },
  ]

  const labels = [
    'January',
    'February',
    'March',
    'April',
    // 'May',
    // 'June',
    // 'July',
    // 'August',
    // 'September',
    // // 'October',
    // // 'November',
    // // 'December',
  ]

  const data = {
    labels: labels,
    datasets: [
      {
        label: '2023 Google Meeting Costs',
        data: [] as number[],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
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

  meetings.forEach((meeting) => data.datasets[0].data.push(meeting.total_cost))

  console.log(data)

  return (
    <>
      <Line data={data} options={{ scales: { x: { type: 'category' } } }} />
    </>
  )
}

export default Graph
