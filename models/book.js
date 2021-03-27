const { v4: uuid } = require('uuid')
const fs = require('fs')
const path = require('path')

class Book {
  constructor(title, price, image, description) {
    this.title = title
    this.price = price
    this.image = image
    this.description = description
    this.id = uuid()
  }

  toJSON() {
    return {
      title: this.title,
      price: this.price,
      image: this.image,
      description: this.description,
      id: this.id
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async save() {
    const books = await Book.getAll()
    books.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'books.json'),
        JSON.stringify(books),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, '..', 'data', 'books.json'), 'utf-8', (err, content) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(content))
        }
      })
    })
  }

  static async getById(id) {
    const books = await Book.getAll()

    return books.find((book) => book.id === id)
  }
}

module.exports = Book
