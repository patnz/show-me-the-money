/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments('id').primary()
    table.string('name')
<<<<<<< HEAD
    table.integer('wage')
=======
    table.decimal('wage')
>>>>>>> bffd19c6736297af0df9c41d08c6b077e69ee6b3
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('attendees')
}
