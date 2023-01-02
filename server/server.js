const express = require('express')
const path = require('path')

const guideRoutes = require('./routes/guides')
const reviewsRoutes = require('./routes/reviews')
const profileRoutes = require('./routes/profiles')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guides', guideRoutes)

server.use('/api/v1/profiles', profileRoutes)

server.use('/api/v1/reviews', reviewsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
