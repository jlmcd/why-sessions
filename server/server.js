require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const { SERVER_PORT } = process.env

const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/clicks', ctrl.getClicks)
app.post('/api/clicks', ctrl.addClick)

app.listen(SERVER_PORT, () =>
  console.log(`Oops I did it ${SERVER_PORT} more times.`)
)
