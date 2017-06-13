function configRoutes($routeProvider) {
  $routeProvider
      .when('/contact', {
        template: '<div id="contact"><h1>Contact page</h1></div>'
      })

}

module.exports = configRoutes
