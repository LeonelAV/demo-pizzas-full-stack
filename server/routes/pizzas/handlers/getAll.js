const Pizza = require( __base + 'models/Pizza')

function getAll( req, res ) {

	Pizza.find()
		.then( pizzas => res.json(pizzas) )

}

module.exports = getAll
