const express = require('express');
const baseUrl = require('../src/config/index').baseUrl
const polyanetRoutes = require('./routes/polyanet')
const soloonsRoutes = require('./routes/soloons')
const comethsRoutes = require('./routes/comeths')
const megaverseRoutes = require('./routes/megaverse')

function apiRouter (app) {
  const router = express.Router()
  app.use('/', router)
  //POLYanet routes
  router.use('/polyanet', polyanetRoutes)
  //SOLoons routes
  router.use('/soloons', soloonsRoutes)
  //comETHS routes
  router.use('/comeths', comethsRoutes)
  //megaverse routes
  router.use('/megaverse', megaverseRoutes)
}

module.exports = apiRouter
