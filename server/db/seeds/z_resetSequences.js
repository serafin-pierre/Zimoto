exports.seed = async (knex) => {
  // Reset the sequences (table increments) in postgres
  if (knex.client.config.client === 'postgresql') {

    // Find all sequences
    const sequences = await knex('pg_class')
      .where('relkind', 'S')
      .not.where('relname', 'LIKE', '%migration%')
      .select('relname').debug()

    // Reset each sequence to max id + 1
    const tableResets = sequences.map(sequenceObj => {
      const sequence = sequenceObj.relname
      const table = sequence.replace('_id_seq', '')
      return knex.raw(`select setval('${sequence}', (select max(id) from ${table}) + 1)`)
    })
    await Promise.all(tableResets)

    console.log('DONE! - sequences reset')
  }
}