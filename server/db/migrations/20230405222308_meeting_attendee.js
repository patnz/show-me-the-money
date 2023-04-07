exports.up = function (knex) {
  return knex.schema.createTable('meeting_attendee', (table) => {
    table.increments('id').primary()
    table.integer('meeting_id')
    table.integer('attendee_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('meeting_attendee')
}
