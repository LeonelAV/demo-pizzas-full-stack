const Pizza = require( __base + 'models/Pizza')

function removePizza (req,res) {
	const { id } = req.params
	Pizza.findByIdAndRemove( id )
		.then( () => res.status(200).json({ msg: `pizza w/ id ${id} removed properly`}) )
		.catch( () => res.status(500).json({ msg: `error removing  pizza w/ id ${id} `}) )


}

module.exports = removePizza
