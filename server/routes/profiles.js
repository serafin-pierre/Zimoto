const express = require('express')
const router = express.Router()

const db = require('../db/profiles')
const dbLoc = require('../db/locations')

// POST /api/v1/profiles/

router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getAGuide(id)
    .then((guideArr) => {
      res.json(guideArr)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/add', (req, res) => {
  const {
    name,
    bio,
    language,
    fee,
    contact_number,
    email,
    picture_url,
    country,
    city,
  } = req.body

  db.addAGuide({ name, bio, language, fee, contact_number, email, picture_url })
    .then((response) => {
      return response
    })
    .then((guideIdArr) => {
      dbLoc.addLocation({ country, city, guide_id: guideIdArr[0] }).then(() => {
        res.json(guideIdArr[0]) // Response for whole route
      })
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

// DELETE /api/v1/profiles/

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const auth0Id = req.auth?.sub

  db.deleteAGuide(id, auth0Id)
    .then((numOfDeletes) => {
      res.json({ deletes: numOfDeletes })
    })
    .catch((err) => {
      return console.error(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const newDetails = req.body

  db.updateAGuide(id, newDetails)
    .then(() => db.getAGuide(id))
    .then((theOneGuide) => res.json(theOneGuide))
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
