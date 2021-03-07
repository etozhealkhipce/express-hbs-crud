const { v5: uuid } = require('uuid')

class Book {
  constructor(title, price, description, image) {
    this.title = title
    this.price = price
    this.description = description
    this.image = image
    this.id = uuid()
  }

  save() {}

  
}
