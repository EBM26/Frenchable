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

    $scope.pictures = [
     {"name": "handbag1", "image": "images/FrenchHandbag.jpg", "price": "$99.99"},
     {"name": "gloves1", "image": "images/FrenchGloves.jpg", "price": "$39.99"},
     {"name": "hat1", "image": "images/FrenchHat.jpeg", "price": "$69.99"}

    ]
  });













