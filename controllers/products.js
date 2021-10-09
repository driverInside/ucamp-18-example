const ProductModel = require('../models/products')

const getProducts = async () => {
  // const products = await ProductModel.find({})
  // return products

  return ProductModel.find({})
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
const getProductById = async (_id) => {
  return ProductModel.findOne({ _id })
}

const createProduct = async (body) => {
  // const products = createProducts()
  // const idString = String(new Date().getMilliseconds())
  // const id = idString[idString.length - 1]
  // body.id = id
  // // body[id] = id
  // products.push(body)
  // return body
  const newProd = new ProductModel(body)

  await newProd.save()

  return newProd
}

const updateProduct = async (_id, updateObject) => {
  return ProductModel.findOneAndUpdate({ _id }, updateObject, {
    upsert: false,
    new: true
  })
}

const removeProduct = async (_id) => {
  return ProductModel.findOneAndDelete({ _id })
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct
}
