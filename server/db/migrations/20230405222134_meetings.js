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
<<<<<<< HEAD
    table.integer('total_cost')
=======
    table.decimal('total_cost')
>>>>>>> bffd19c6736297af0df9c41d08c6b077e69ee6b3
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
