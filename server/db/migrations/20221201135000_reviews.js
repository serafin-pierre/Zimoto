exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.integer('rating')
    table.string('title')
    table.string('text')
    table.integer('guide_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
