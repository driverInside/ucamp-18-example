const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
  sku: String,
  name: String,
  description: String,
  image: String,
  price: Number,
  quantity: Number,
  id: String
}, {
  versionKey: false
})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
