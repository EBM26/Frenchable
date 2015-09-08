angular
.module("frenchableApp", ['ui.router']); // initiating angular and angular-ui in app

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


angular // angular controller for app
.module("frenchableApp")
.controller("frechableController", function ($scope) {

//samples array for home page

  $scope.samples = [
  {"name": "Stylish Bags", "image": "images/FrenchHandbag.jpg"},
  {"name": "Stylish Gloves", "image": "images/FrenchGloves.jpg"},
  {"name": "Stylish Hats", "image": "images/FrenchHat.jpeg"}

  ]

  // hats array for products page

  $scope.hats = [
  {"name": "Red French Hat", "image": "images/Hat1.jpg", "price": "$39.99"},
  {"name": "White French Hat", "image": "images/Hat4.jpg", "price": "$29.99"},
  {"name": "Green French Hat", "image": "images/Hat3.jpg", "price": "$49.99"}

  ]

  //  gloves array for products page

  $scope.gloves = [
  {"name": "Black Leather Gloves", "image": "images/Gloves1.jpg", "price": "$59.99"},
  {"name": "French Pattern Gloves", "image": "images/Gloves2.jpg", "price": "$49.99"},
  {"name": "French Mesh Gloves", "image": "images/Gloves3.jpg", "price": "$69.99"}

  ]


  //  bags array for products page
   $scope.bags = [
  {"name": "Pink Leather Bag", "image": "images/Bag1.jpg", "price": "$79.99"},
  {"name": "French Pattern Bag", "image": "images/Bag2.jpg", "price": "$69.99"},
  {"name": "Purple Flower Bag", "image": "images/Bag3.jpg", "price": "$89.99"}
  
  ]

});













