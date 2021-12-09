// initiate packages
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const { getUserData, createUserData, updateUserData, deleteUserData } = require('./controller')

const app = express()

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

app
  .route('/user')
  .get(getUserData)
  .post(createUserData)
  .put(updateUserData)
  .delete(deleteUserData)
  
app.listen('5000', () => console.log('Running on Port 5000'))