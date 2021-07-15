#!/usr/bin/env node

const handler = require('serve-handler');
const http = require('http');
var port = 3000
try {
  const config = require('./config/skill-serve.json')
  if (config && config.port) {
    port = config.port
  }
} catch (e) {
  console.error(e)
}

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
})

server.listen(port, () => {
  console.log('Running at http://localhost:' + port);
});