function LogoutController($scope, $location, AuthService) {

  console.log('LogoutController...');
  AuthService.logout()
  $location.path('/')

}

module.exports = LogoutController