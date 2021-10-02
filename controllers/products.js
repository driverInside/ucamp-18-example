const createProducts = require('../utils/products')

const getProducts = () => {
  const products = createProducts()
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
const getProductById = (id) => {
  const products = createProducts()
  return products.find(product => product.id === Number(id))
}

const createProduct = (body) => {
  const products = createProducts()
  const idString = String(new Date().getMilliseconds())
  const id = idString[idString.length - 1]
  body.id = id
  // body[id] = id
  products.push(body)
  return body
}


module.exports = {
  getProducts,
  getProductById,
  createProduct
}
