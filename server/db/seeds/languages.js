/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('languages').del()
  await knex('languages').insert([
    {
      id: 1, 
      language: 'English',
      guide_id: 1
    },
    {
      id: 2, 
      language: 'English',
      guide_id: 2
    },
    {
      id: 3, 
      language: 'English',
      guide_id: 3
    },
    {
      id: 4, 
      language: 'English',
      guide_id: 4
    },
    {
      id: 5, 
      language: 'English',
      guide_id: 5
    },
    {
      id: 6, 
      language: 'English',
      guide_id: 6
    },
    {
      id: 7, 
      language: 'English',
      guide_id: 7
    },
    {
      id: 8, 
      language: 'English',
      guide_id: 8
    },
    {
      id: 9, 
      language: 'English',
      guide_id: 9
    },
    {
      id: 10, 
      language: 'French',
      guide_id: 1
    },
    {
      id: 11, 
      language: 'Japanese',
      guide_id: 2
    },
    {
      id: 12, 
      language: 'Mandarin',
      guide_id: 3
    },
    {
      id: 13, 
      language: 'Spanish',
      guide_id: 4
    },
    {
      id: 14, 
      language: 'Japanese',
      guide_id: 5
    },

  ]);
};
