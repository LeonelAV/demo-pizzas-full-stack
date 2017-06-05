function DataService ($http) {

	function getAllPizzas() {
		return $http.get('/pizzas')
			.then( response => response.data )
	}

	return { getAllPizzas }

}

module.exports = DataService
