'use strict'

const { port } = require('config')
const beforeExit = require('before-exit')
const restify = require('restify')

const logger = require('../logger')

const routes = require('./routes')
const { attach, detach } = require('./websockets')

const server = restify.createServer()

server.use(restify.plugins.queryParser())

function logRequest (req, res, next) {
  logger.verbose('-->', req.url)
  return next()
}

server.use(logRequest)

function start () {
  beforeExit.do(function (signal) {
    logger.error('Shutting down API on signal', signal)

    return detach()
  })

  routes.applyRoutes(server)

  server.listen(port, function () {
    logger.info(`API started on port ${port}`)
  })

  attach(server)
}

module.exports = { start }
