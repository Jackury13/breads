
// dependencies
const express = require('express')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })

  //middleware
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jax')
  app.engine('jsx', require('express-react-views').createEngine())
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
//listen
app.listen(PORT, () => {
    console.log('listening on port, PORT');
})