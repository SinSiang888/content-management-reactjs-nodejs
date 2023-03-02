const mongoose = require('mongoose')
const schema = mongoose.Schema
const dburl = 'my database link'


mongoose.set('strictQuery', false)

mongoose.connect(dburl, (err) => {
  if (err) {
    console.log(err)
  } console.log("DB connection successful")
})

const dbschema = new schema({
  name: String,
  email: String,
  password: String
})

module.exports = mongoose.model('userinfo', dbschema)
