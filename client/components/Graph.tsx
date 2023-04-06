import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function Graph() {
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

  console.log(totalByMonth)

  // const monthified = meetings.map((el) => {
  //   month = el.start_time.getMonth()
  // })

  // const yearArray = [[], [], [], [], [], [], [], [], [], [], [], []]

  // meetings.map((el) => {
  //   const monthIndex = el.start_time.getMonth()
  //   yearArray[monthIndex - 1].push(el.total_cost)
  // })

  // 1. reassign start_time to the month i.e. 02 using .getMonth()
  // 2. mapping over the meetings array, where the start_time property is 01, sum total_cost and push it to an empty array
  // 3. do this 12 times for each month
  // 4. we now have our data!

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
