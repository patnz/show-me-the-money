/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('attendees').del()
  await knex('attendees').insert([
    { id: 1, name: 'Kelly', wage: 25.0 },
    { id: 2, name: 'Shrena', wage: 25.0 },
    { id: 3, name: 'Josh', wage: 25.0 },
    { id: 4, name: 'Emily', wage: 25.0 },
    { id: 5, name: 'Yosan', wage: 25.0 },
  ])
}
