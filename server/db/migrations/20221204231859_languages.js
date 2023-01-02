exports.up = function (knex) {
  return knex.schema.createTable('languages', (table) => {
    table.increments('id')
    table.string('language')
    table.integer('guide_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('languages')
}
