/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('attendees').del()
  await knex('attendees').insert([
    { id: 1, name: 'Kelly' },
    { id: 2, name: 'Shrena' },
    { id: 3, name: 'Josh' },
    { id: 4, name: 'Emily' },
    { id: 5, name: 'Yosan' },
  ])
}
