var fs = require('fs')
var htmlRegister = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/register', {
        template: htmlRegister,
        controller: 'RegisterController'
      })

}

module.exports = configRoutes