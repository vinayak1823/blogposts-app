const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const dbobject = mongoose.connection

dbobject.on('connected', () => {
  mongoose.set('useFindAndModify', false)
  console.log('Mongo DB sucessful')
})
dbobject.on('error', () => {
  console.log('Connection failed')
})

module.exports = mongoose
