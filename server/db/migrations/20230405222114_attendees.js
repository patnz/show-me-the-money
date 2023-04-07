exports.up = function (knex) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.decimal('wage')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('attendees')
}
