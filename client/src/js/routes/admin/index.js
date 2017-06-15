var fs = require('fs');
var htmlAdmin = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/admin', {
        template: htmlAdmin,
        controller: 'AdminController',
        secure: true
      })

}

module.exports = configRoutes
