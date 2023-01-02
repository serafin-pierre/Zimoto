
const connection = require('./connection')

function addLocation(newLocation, db = connection) {
  return db('locations').insert(newLocation, 'id')
}

module.exports = {
  addLocation
}