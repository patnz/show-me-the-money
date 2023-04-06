/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('meetings', (table) => {
    table.increments('id').primary()
    table.string('meeting_name')
    table.integer('duration')
    table.date('start_time')
    table.decimal('total_cost')
    table.integer('attendees')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('meetings')
}
