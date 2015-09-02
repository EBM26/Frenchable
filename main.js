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
     {"name": "Red Leather Bag", "image": "images/FrenchHandbag.jpg", "price": "$99.99"},
     {"name": "Winter Gloves", "image": "images/FrenchGloves.jpg", "price": "$39.99"},
     {"name": "French Red Hat", "image": "images/FrenchHat.jpeg", "price": "$69.99"}

    ]
  });













