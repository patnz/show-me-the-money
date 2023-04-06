/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('meetings').del()
  await knex('meetings').insert([
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
  ])
}
