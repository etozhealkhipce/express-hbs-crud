const { Router } = require('express')
const Cart = require('../models/cart')
const Book = require('../models/book')

const router = Router()

router.post('/add', async (req, res) => {
  const book = await Book.getById(req.body.id)

  await Cart.add(book)
  res.redirect('/cart')
})

router.delete('/remove/:id', async (req, res) => {
  const cart = await Cart.remove(req.params.id)
  res.status(200).json(cart)
})

router.get('/', async (req, res) => {
  const cart = await Cart.fetch()

  res.render('cart', {
    title: 'Cart',
    books: cart.books,
    price: cart.price,
    isCart: true
  })
})

module.exports = router
