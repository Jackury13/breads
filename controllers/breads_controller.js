const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// INDEX
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: Bread
    }
  )
// res.send(Bread)
})


// show
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]){
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})

//create  
breads.post('/', (req, res) => {
  if (req.body.hasGlutten === 'on') {
    req.body.hasGlutten === 'true'
  } else {
    req.body.hasGlutten = 'false'
  }
  Bread.push(req.body)
  res.send(Bread)
})

module.exports = breads
