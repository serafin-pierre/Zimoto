exports.up = function (knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id')
    table.string('country')
    table.string('city')
    table.integer('guide_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('locations')
}
