var fs = require('fs')
var htmlLogin = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/login', {
        template: htmlLogin,
        controller: 'LoginController'
      })

}

module.exports = configRoutes