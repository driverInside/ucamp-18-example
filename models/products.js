const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  sku: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'no available'
  },
  image: String,
  price: Number,
  quantity: Number,
  since: {
    type: Date,
    default: new Date()
  }
}, {
  versionKey: false,
  timestamps: true
})

const ProductModel = mongoose.model('Products', productSchema)

module.exports = ProductModel
