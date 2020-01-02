require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./controller')
const { SERVER_PORT, SESSION_SECRET } = process.env

const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 60 * 60 * 60 * 24 * 7
  }
}))
app.use(express.static(`${__dirname}/../build`))


// ENDPOINTS
app.get('/api/clicks', ctrl.getClicks)
app.post('/api/clicks', ctrl.addClick)

app.listen(SERVER_PORT, () =>
  console.log(`Oops I did it ${SERVER_PORT} more times.`)
)
