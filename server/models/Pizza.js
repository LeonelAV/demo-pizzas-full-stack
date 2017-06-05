const mongoose = require('mongoose');
const collection = 'pizzas'

const PizzaSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required: true
  },
  description: String,
  image: String
}, { collection })

module.exports = mongoose.model('Pizza', PizzaSchema);
