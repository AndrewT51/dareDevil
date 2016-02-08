'use strict'

var myApp = angular.module('myApp',['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "./templates/home.html",
      controller: "homeCtrl"
    })
})

.controller('homeCtrl', function(){
  console.log('hello')
})