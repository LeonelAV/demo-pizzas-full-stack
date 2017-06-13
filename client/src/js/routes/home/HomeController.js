function MainController($scope, $rootScope, ApiService) {

	$rootScope.section = "home"

	ApiService.getAllPizzas()
		.then(pizzas => $scope.pizzas = pizzas)

}

module.exports = MainController
