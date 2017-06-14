const angular = require('angular')
const angularRoute = require("angular-route");
const angularTable = require("ng-table")

const configRouteHome = require('./home')
const HomeController = require('./home/HomeController')

const configRouteAdd = require('./addPizza')
const AddController = require('./addPizza/AddController')

const configRouteAdmin = require('./admin')
const AdminController = require('./admin/AdminController')

const configRouteRegister = require('./register')
const RegisterController = require('./register/RegisterController')

const configRouteLogin = require('./login')
const LoginController = require('./login/LoginController')


const configRouteContact = require('./contact')

angular.module('pizzaAppRoutes', [ angularRoute, "ngTable" ])

  // Route /
  .controller('HomeController', HomeController)
  .config( configRouteHome )

  // Route /addPizzas
  .controller('AddController', AddController)
  .config( configRouteAdd )

  // Route /contact
  .config( configRouteContact )

  // Route /admin
  .controller('AdminController', AdminController)
  .config( configRouteAdmin )

    // Route /register
  .controller('RegisterController', RegisterController)
  .config( configRouteRegister )

  // Route /login
  .controller('LoginController', LoginController)
  .config( configRouteLogin )

module.exports = 'pizzaAppRoutes'

