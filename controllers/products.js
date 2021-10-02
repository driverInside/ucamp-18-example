const ProductModel = require('../models/products')

const getProducts = async () => {
  const products = await ProductModel.find({})
  return products
}

/**
 * getProductById
 * @description Get product by id
 * @example
 * const {getproductById} = require('./controllers/products')
 * const product = getProductById('5')
 * @param {string} id The product id.
 * @returns A single product with the given id or null
 */
const getProductById = async (id) => {
  const product = await ProductModel.findOne({
    _id: id
  })
  return product
}

const createProduct = async (body) => {
  // const products = createProducts()
  // const idString = String(new Date().getMilliseconds())
  // const id = idString[idString.length - 1]
  // body.id = id
  // // body[id] = id
  // products.push(body)
  // return body
  const newProduct = new ProductModel(body)

  await newProduct.save()

  return newProduct.toObject()
}

module.exports = {
  getProducts,
  getProductById,
  createProduct
}
