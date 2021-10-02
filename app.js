const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./apis')

app.use(cors())
// method(path: string, cb(req, res [, next]))
/**
 * req  attr body, query, params
 * res  methods  json, send, status
 */
app.get('/', (req, res) => {
  res.send({
    message: 'ola mund0'
  })
})

app.use(express.json())
app.use(router)

module.exports = app
