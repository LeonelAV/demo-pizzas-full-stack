function configRoutes($routeProvider) {
  $routeProvider
      .when('/admin', {
        templateUrl: '/templates/admin.html',
        controller: 'AdminController'
      })

}

module.exports = configRoutes
