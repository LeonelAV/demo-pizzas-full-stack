const Pizza = require( __base + 'models/Pizza')

function updatePizza (req,res) {
	const { id } = req.params
	const { name, description, image } = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (description) dataToUpdate.description = description
	if (image) dataToUpdate.image = image

	Pizza.findByIdAndUpdate( id,  dataToUpdate)
		.then( () => res.status(200).json({ msg: `pizza w/ id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating  pizza w/ id ${id} `}) )


}

module.exports = updatePizza


