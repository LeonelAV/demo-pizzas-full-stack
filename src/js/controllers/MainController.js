function MainController($scope, ApiService) {


	ApiService.getAllPizzas()
		.then(pizzas => $scope.pizzas = pizzas)

}

module.exports = MainController
