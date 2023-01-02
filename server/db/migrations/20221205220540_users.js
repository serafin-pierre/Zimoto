exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('surname')
    table.text('username')
    table.boolean('guide')


  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}