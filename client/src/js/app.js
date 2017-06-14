const angular = require('angular')

const ngAnimate = require('angular-animate')
const angularJwt = require('angular-jwt')
const toastr = require('angular-toastr')

const routesApp = require('./routes')
const runAtBegin = require('./run')

const ApiService = require('./services/ApiService')
const AuthService = require('./services/AuthService')
const AuthInterceptor = require('./services/AuthInterceptor')
const StorageService = require('./services/StorageService')

angular.module('pizzaApp', [ routesApp, ngAnimate, toastr, angularJwt ])
	.factory('ApiService', ApiService)
  .factory('AuthService', AuthService)
  .factory('AuthInterceptor', AuthInterceptor)
  .factory('StorageService', StorageService)
  .run( runAtBegin )

