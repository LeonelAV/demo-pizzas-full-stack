function MainController($scope, $rootScope, ApiService) {

	$rootScope.section = "home"

	ApiService.getAllPizzas()
		.then(pizzas => $scope.pizzas = pizzas)

	$scope.removePizza = function(id) {
		ApiService.removePizza(id)
			.then(console.log)
	}
}

module.exports = MainController
