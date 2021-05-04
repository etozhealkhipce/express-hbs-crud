const { Schema, model } = require('mongoose')

const book = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
    // data: Buffer
  },
  description: String
})

module.exports = model('Book', book)
