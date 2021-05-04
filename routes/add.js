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

router.post('/', async (req, res) => {
  try {
    const { title, price, image, description } = req.body

    const book = new Book({
      title,
      price,
      image,
      description
    })

    await book.save()

    res.redirect('/all')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
