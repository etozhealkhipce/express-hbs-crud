const { Router } = require('express')
const Book = require('../models/book')

const router = Router()

router.get('/', async (req, res) => {
  const books = await Book.getAll()

  res.status(200)
  // res.sendFile(path.join(__dirname, 'views', 'index'))
  res.render('all', {
    title: 'Main page',
    isAll: true,
    books
  })
})

router.get('/:id', async (req, res) => {
  const book = await Book.getById(req.params.id)
  res.render('book', {
    layout: 'empty',
    title: `Курс ${book.title}`,
    book
  })
})

module.exports = router
