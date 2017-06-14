const angular = require('angular')

const ngAnimate = require('angular-animate')
const toastr = require('angular-toastr')

const routesApp = require('./routes')
const runAtBegin = require('./run')
const ApiService = require('./services/ApiService')

angular.module('pizzaApp', [ routesApp, ngAnimate, toastr ])
	.factory('ApiService', ApiService)
  .run( runAtBegin )

