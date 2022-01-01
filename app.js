// initiate packages
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// Initiate DB
require('./system/database')

// initiate
app.use(helmet())

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))

// route
app.get('/', (request, response) => response.json({
  msg: 'Hello world'
}))

require('./router')(app)

module.exports = app