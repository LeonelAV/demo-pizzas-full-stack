var fs = require('fs');
var htmlAddPizza = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/add', {
        template: htmlAddPizza,
        controller: 'AddController'
      })

}

module.exports = configRoutes
