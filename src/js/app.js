const angular = require('angular')
const MainController = require('./controllers/MainController')
const ApiService = require('./services/ApiService')

angular.module('pizzaApp', [])
	.factory('ApiService', ApiService)
	.controller('MainController', MainController)

