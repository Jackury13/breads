
// dependencies
const express = require('express')
const methodOverride = require('method-override')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// ROUTES
  app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
    })

//middleware
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jsx')
  app.engine('jsx', require('express-react-views').createEngine())
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: true}))
  app.use(methodOverride('_method'))


  


  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)

    // 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

//listen
app.listen(PORT, () => {
    console.log('listening on port, PORT');
})