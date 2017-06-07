const angular = require('angular')
const angularRoute = require("angular-route");

const HomeController = require('./controllers/HomeController')
const AddController = require('./controllers/AddController')

const ApiService = require('./services/ApiService')

const configRoutes = require('./config/routes')

angular.module('pizzaApp', [ angularRoute ])
	.factory('ApiService', ApiService)
	.controller('HomeController', HomeController)
	.controller('AddController', AddController)
	.config( configRoutes )

