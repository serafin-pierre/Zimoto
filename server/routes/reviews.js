const express = require('express')
// const checkJwt = require ('../auth0.js')
const db = require('../db/reviews')

const router = express.Router()

//POST /api/v1/reviews/
router.post('/', async (req, res) => {
  try {
    const create = await db.addReview(req.body)
    res.json(create)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// PATCH /api/v1/reviews/:id
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const editor = await db.editReview(id, req.body)
    res.json(editor)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// DELETE /api/v1/reviews
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const reviewDel = await db.deleteReview(id)
    res.json(reviewDel)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:guideId', (req, res) => {
  const id = req.params.guideId
  db.getReviewsByGuideId(id)
    .then((results) => {
      res.json(results.map((review) => review))
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
