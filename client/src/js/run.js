var fs = require('fs');
var htmlNavbar = fs.readFileSync(__dirname + '/templates/navbar.html', 'utf8');
var htmlModal = fs.readFileSync(__dirname + '/templates/modal.html', 'utf8');

function runAtBegin($templateCache, $rootScope, $location, StorageService, AuthService) {

  $templateCache.put('navbar.html', htmlNavbar);
  $templateCache.put('modal.html', htmlModal);

  if ( AuthService.isLoggedIn() ) {
      const token = StorageService.getToken()
      AuthService.setCredentials(token)
    }

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {

      console.log("route has changed")
      if (next && next.secure) {
        console.log("this route is secured!!")
        if ( !AuthService.isLoggedIn() ) {
          $location.path("/login");
        }
      }

    });
}

module.exports = runAtBegin