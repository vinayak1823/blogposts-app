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

app.listen(process.env.PORT, function () {
  console.log('Node started')
})
