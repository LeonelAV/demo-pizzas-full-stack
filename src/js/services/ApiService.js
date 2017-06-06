function DataService ($http) {

	function getAllPizzas() {
		return $http.get('/api/pizzas')
			.then( response => response.data )
	}

	function addPizza( data ) {
		return $http.post('/api/pizzas', data)
			.then( response => response.data )
	}

	function removePizza( id ) {
		return $http.delete(`/api/pizza/${id}`)
			.then( response => response.data )
	}

	return { getAllPizzas, addPizza, removePizza }

}

module.exports = DataService
