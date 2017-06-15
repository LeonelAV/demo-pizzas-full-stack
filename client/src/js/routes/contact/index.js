var fs = require('fs')
var htmlContact = fs.readFileSync(__dirname + '/template.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/contact', {
        template: htmlContact,
        controller: 'ContactController'
      })

}

module.exports = configRoutes
