const connection = require('./connection')

function getAGuide(id, db = connection) {
  return db('guides')
    .leftJoin('locations', 'locations.guide_id', 'guides.id')
    .select('*', 'guide_id AS guideId', 'contact_number AS contactNumber')
    .where('guides.id', id)
    .first()
}

function addAGuide(newGuide, db = connection) {
  return db('guides').insert(newGuide, 'id')
}

function deleteAGuide(id, db = connection) {
  return db('guides').where('id', id).del()
}

function updateAGuide(id, newDetails, db = connection) {
  return db('guides').update(newDetails).where('id', id)
}



module.exports = {
  getAGuide,
  addAGuide,
  deleteAGuide,
  updateAGuide
}
