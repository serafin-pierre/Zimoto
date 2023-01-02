exports.up = function (knex) {
  return knex.schema.createTable('guides', (table) => {
    table.increments('id')
    table.string('name')
    table.text('bio')
    table.string('language')
    table.integer('fee')
    table.bigint('contact_number')
    table.string('email')
    table.string('picture_url')

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('guides')
}
