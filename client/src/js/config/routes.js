function configRoutes($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
      })
      .when('/add', {
        templateUrl: '/templates/addPizza.html',
        controller: 'AddController'
      })
      .when('/contact', {
        template: '<div id="contact"><h1>Contact page</h1></div>'
      })

}

module.exports = configRoutes
