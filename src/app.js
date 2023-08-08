const express = require('express');
const polyanetRouter = require('./routes/polyanet')

function apiRouter (app) {
  const router = express.Router()
  app.use('/', router)
  //POLYanet routes
  router.use('/polyanet', polyanetRouter)
}

module.exports = apiRouter