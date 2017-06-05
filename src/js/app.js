const angular = require('angular')
const angularRoute = require("angular-route");

const MainController = require('./controllers/MainController')
const ApiService = require('./services/ApiService')

angular.module('pizzaApp', [ angularRoute ])
	.factory('ApiService', ApiService)
	.controller('MainController', MainController)
	.config( $routeProvider => {
    $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'MainController'
        })
        .when('/about', {
          template: '<div id="about"><h1>About page</h1></div>'
        })
        .when('/contact', {
          template: '<div id="contact"><h1>Contact page</h1></div>'
        })

  })

