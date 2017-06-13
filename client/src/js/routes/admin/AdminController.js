function MainController($scope, $rootScope, NgTableParams, ApiService, toastr) {

	$rootScope.section = "home"
  allPizzasToScope();


	$scope.removePizza = function(id) {
		ApiService.removePizza(id)
			.then( msg => {
        toastr.info('Pizza Removed!', msg);
        allPizzasToScope()
      })
	}

  function allPizzasToScope() {

    ApiService.getAllPizzas()
      .then(pizzas => {
        $scope.pizzas = pizzas
        console.log(pizzas);
        $scope.tableParams = new NgTableParams(
          { sorting: { _id: "desc" } }, // initial sort order
          { dataset: pizzas }
          );
      })

  }


}

module.exports = MainController