#!/usr/bin/env node

const handler = require('serve-handler')
const http = require('http')
var port = 5000
var root = '.'
var options = {}
try {
  const configFile = process.cwd() + '/config/skill-serve.json'
  console.log('config file', configFile)
  const config = require(configFile)
  if (config && config.port) {
    port = config.port
  }
  if (config && config.root) {
    root = config.root
    options.public = root
  }
} catch (e) {
  console.error(e)
}

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    options
  })
})

server.listen(port, () => {
  console.log('Running at http://localhost:' + port)
})
