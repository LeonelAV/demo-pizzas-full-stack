const express = require('express')
const router = express.Router()

const updatePizza = require('./handlers/updatePizza')
const removePizza = require('./handlers/removePizza')

router.put('/:id', updatePizza)
router.delete('/:id', removePizza)

module.exports = router
