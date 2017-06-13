function AddController($scope, $location, $rootScope, ApiService, toastr ) {

	$rootScope.section = "add"

	$scope.addPizza = function() {

		const {name, description, image} = $scope

		ApiService.addPizza({name, description, image})
			.then( msg => {
        console.log(msg);
        $location.path( "/admin" );
        toastr.success('Pizza Added!', 'Success adding the pizza!');

      } )

	}

}

module.exports = AddController
