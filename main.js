angular
.module("frenchableApp", ['ui.router']);

angular
.module("frenchableApp")
.config(function($stateProvider, $urlRouterProvider) {

      // For any unmatched url, redirect to /home

      $urlRouterProvider.otherwise('/home');

        // setting up the states (routes)

        $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: 'partial-home.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: 'partial-about.html'
        })

        .state('products', {
          url: '/products',
          templateUrl: 'partial-products.html'
        })

        .state('cart', {
          url: '/cart',
          templateUrl: 'partial-cart.html'
        })

      });


angular
.module("frenchableApp")
.controller("frechableController", function ($scope) {

//samples array for home page

  $scope.samples = [
  {"name": "Stylish Bags", "image": "images/FrenchHandbag.jpg"},
  {"name": "Stylish Gloves", "image": "images/FrenchGloves.jpg"},
  {"name": "Stylish Hats", "image": "images/FrenchHat.jpeg"}

  ]
});













