function LoginController($scope, $location, AuthService) {

	$scope.login = function(event) {
		event.preventDefault()
		const { username, password } = $scope

		AuthService.login(username, password)
			.then(msg => {
				console.log(msg)
					$location.path('/admin')
			})
			.catch(console.log)
	}

}

module.exports = LoginController