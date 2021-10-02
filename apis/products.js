/**
 * Defines the product routes
 */
const express = require('express')
const router = express.Router()
const { productsController } = require('../controllers')
const createProducts = require('../utils/products')
const { getProducts, getProductById, createProduct } = productsController

// const { productsController } = require('../controllers')
// router.get('/', productsController.getProducts)
// router.get('/:id', productsController.getProductById(id))

router.get('/', (req, res) => {
  const products = getProducts()
  res.send(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = getProductById(id)

  // para no hacer product === null, product === undefined, typeof product ...
  if (!product) {
    res.status(404)
    res.send({
      message: `Product: ${id} not found`
    })
  }

  res.send(product)
})

router.post('/', (req, res) => {
  const body = req.body
  const newProduct = createProduct(body)
  res.status(201)
  res.send(newProduct)
})

module.exports = router
