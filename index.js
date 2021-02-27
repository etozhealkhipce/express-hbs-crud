const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs' // default
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views') // default

app.get('/', (req, res) => {
  res.status(200)
  // res.sendFile(path.join(__dirname, 'views', 'index'))
  res.render('index')
})

app.get('/about', (req, res) => {
  res.status(200)
  res.render('about')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server running')
})
