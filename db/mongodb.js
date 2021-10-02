const mongoose = require('mongoose')

const MONGO_DB_URL = process.env.MONGO_DB_URL

mongoose.connect(MONGO_DB_URL, {}, function (err) {
  if (err) {
    console.error('Error al conectar la base datos')
    console.error(err)
  }
  console.log('Base de datos conectada!!!')
})
