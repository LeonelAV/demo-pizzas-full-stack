const express = require('express')
const router = express.Router()

const updatePizza = require('./handlers/updatePizza')
const removePizza = require('./handlers/removePizza')

// router.put('/', updatePizza)
// router.delete('/', removePizza)

module.exports = router
