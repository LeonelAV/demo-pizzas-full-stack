function AddController($scope, $rootScope, ApiService ) {

	$rootScope.section = "add"

	$scope.addPizza = function() {

		const {name, description, image} = $scope

		ApiService.addPizza({name, description, image})
			.then( console.log )

	}

}

module.exports = AddController
