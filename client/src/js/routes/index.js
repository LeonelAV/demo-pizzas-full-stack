const angular = require('angular')
const angularRoute = require("angular-route");
const angularTable = require("ng-table")

const configRouteHome = require('./home')
const HomeController = require('./home/HomeController')

const configRouteAdd = require('./addPizza')
const AddController = require('./addPizza/AddController')

const configRouteAdmin = require('./admin')
const AdminController = require('./admin/AdminController')


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

module.exports = 'pizzaAppRoutes'

