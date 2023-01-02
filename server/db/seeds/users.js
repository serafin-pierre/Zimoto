exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jeremiah', surname: 'Alfonso', username: 'jeralf', guide: true },
        {id: 2, first_name: 'Bobby', surname: 'Souffle', username: 'bobsou', guide: true },
    ]);
  })
}
