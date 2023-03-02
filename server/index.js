const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const formschema = require('./models/mongo')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('form')
})


app.post('/form', (req, res) => {
  //data = req.body
  //res.send(data)

  const formdata = new formschema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  formdata.save((err) => { res.send("Data has been sent successfully") })

})


app.get('/show', (req, res) => {
  formschema.find((err, result) => {
    res.render('show', { userinfo: result })
  })
})

app.get('/delete/:id', async (req, res) => {
  await formschema.findByIdAndDelete(req.params.id)
  res.redirect('/show')

})

app.get('/edit/:id', (req, res) => {
  formschema.findById(req.params.id, (err, result) => {
    res.render('edit', { userinfo: result })
  })
})


app.post('/update/:id', async (req, res) => {

  await formschema.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/show')
})

app.listen(3589, () => { console.log("Server is running at http://localhost:3500") })