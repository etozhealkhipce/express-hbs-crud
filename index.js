const express = require('express')
// const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs' // default
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views') // default
app.use('/public', express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.status(200)
  // res.sendFile(path.join(__dirname, 'views', 'index'))
  res.render('index', {
    title: 'Main page',
    isHome: true
  })
})

app.get('/all', (req, res) => {
  res.status(200)
  res.render('all', {
    title: 'All books',
    isAll: true
  })
})

app.get('/add', (req, res) => {
  res.status(200)
  res.render('add', {
    title: 'Add book',
    isAdd: true
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server running')
})
