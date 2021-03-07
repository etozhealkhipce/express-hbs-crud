const { Router } = require('express')

const router = Router()

const Book = require('../models/book')

router.get('/', (req, res) => {
  res.status(200)
  res.render('add', {
    title: 'Add book',
    isAdd: true
  })
})

router.post('/', (req, res) => {
  const { title, price, image, description } = req.body
  const book = new Book(title, price, image, description)
  book.save()

  res.redirect('/all')
})

module.exports = router
