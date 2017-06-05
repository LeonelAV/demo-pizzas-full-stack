const Pizza = require( __base + 'models/Pizza')

function addPizza( req, res ) {
	const { name, description, image } = req.body
	const pizza	= new Pizza( { name, description, image } )
	pizza.save()
		.then( () => {
			return res.status(200).json({ msg: 'pizza inserted properly'})
		})
		.catch( () => {
			return res.status(500).json({ msg: 'error inserting pizza'})
		})
}

module.exports = addPizza
