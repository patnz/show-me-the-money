/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { meeting_id: '1', attendee_id: 1 },
    { meeting_id: '1', attendee_id: 2 },
    { meeting_id: '1', attendee_id: 3 },
    { meeting_id: '1', attendee_id: 5 },
    { meeting_id: '2', attendee_id: 3 },
    { meeting_id: '2', attendee_id: 4 },
    { meeting_id: '3', attendee_id: 4 },
    { meeting_id: '3', attendee_id: 2 },
    { meeting_id: '3', attendee_id: 1 },
  ])
}
