exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { id: 1, country: 'New Zealand', city: 'Wellington', guide_id: '1'},
        { id: 2, country: 'New Zealand', city: 'Christchurch', guide_id: '1'},
        { id: 3, country: 'America', city: 'Rancho Cucamonga', guide_id: '2' },
        { id: 4, country: 'Australia', city: 'Melbourne', guide_id: '3'},
        { id: 5, country: 'Australia', city: 'Sydney', guide_id: '3'},
        { id: 6, country: 'America', city: 'Californina', guide_id: '4'},
        { id: 7, country: 'America', city: 'Californina', guide_id: '5'},
        { id: 8, country: 'America', city: 'Californina', guide_id: '6'},
        { id: 9, country: 'America', city: 'Californina', guide_id: '7'},
        { id: 10, country: 'America', city: 'Californina', guide_id: '8'},
        { id: 11, country: 'America', city: 'Californina', guide_id: '9'},
      ])
    })
}


