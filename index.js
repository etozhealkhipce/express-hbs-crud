const express = require('express')
// const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const allRoutes = require('./routes/all')
const addRoutes = require('./routes/add')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs' // default
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views') // default
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(`${__dirname}/public`))
app.use('/', homeRoutes)
app.use('/all', allRoutes)
app.use('/add', addRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server running')
})
