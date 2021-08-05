const express = require('express')
var app = express()

const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const dbfile = require('./connection')
const postroute = require('./routes/post')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/post', postroute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

app.listen(process.env.PORT, function () {
  console.log('Node started')
})
