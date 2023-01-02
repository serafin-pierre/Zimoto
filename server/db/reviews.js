const connection = require('./connection')

function addReview(review, db = connection) {
  return db('reviews').insert(review, 'id')
}

function editReview(id, reviews, db = connection) {
  return db('reviews')
    .where({ id: `${id}` })
    .update(reviews)
}

function deleteReview(id, db = connection) {
  return db('reviews').where({ id: id }).del()
}

function getReviewsByGuideId(guideId, db = connection) {
  return db('reviews').select().where('guide_id', guideId)
}
// function getAllReviews(db = connection) {
//   return db('reviews').select()
// }
module.exports = {
  addReview,
  editReview,
  deleteReview,
  getReviewsByGuideId,
}
