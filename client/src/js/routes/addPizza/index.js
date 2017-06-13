function configRoutes($routeProvider) {
  $routeProvider
      .when('/add', {
        templateUrl: '/templates/addPizza.html',
        controller: 'AddController'
      })

}

module.exports = configRoutes
