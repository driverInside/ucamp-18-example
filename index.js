const app = require('./app')
require('dotenv').config()
require('./db/mongodb')
const PORT = 4000

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
