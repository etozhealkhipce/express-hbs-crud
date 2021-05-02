const path = require('path')
const fs = require('fs')

class Cart {
  static async add(book) {
    const cart = await Cart.fetch()

    const idx = cart.books.findIndex((b) => b.id === book.id)
    const candidate = cart.books[idx]

    if (candidate) {
      candidate.count += 1
      cart.books[idx] = candidate
    } else {
      // eslint-disable-next-line no-param-reassign
      book.count = 1
      cart.books.push(book)
    }

    cart.price += +book.price

    return new Promise((resolve, reject) => {
      fs.writeFile(path.join(__dirname, '..', 'data', 'cart.json'), JSON.stringify(cart), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

  static async remove(id) {
    const cart = await Cart.fetch()

    const idx = cart.books.findIndex((b) => b.id === id)
    const book = cart.books[idx]

    if (book.count === 1) {
      cart.books = cart.books.filter((b) => b.id !== id)
    } else {
      // eslint-disable-next-line no-plusplus
      cart.books[idx].count--
    }

    cart.price -= +book.price

    return new Promise((resolve, reject) => {
      fs.writeFile(path.join(__dirname, '..', 'data', 'cart.json'), JSON.stringify(cart), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(cart)
        }
      })
    })
  }

  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, '..', 'data', 'cart.json'), (err, content) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(content))
        }
      })
    })
  }
}

module.exports = Cart
