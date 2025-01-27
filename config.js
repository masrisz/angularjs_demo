angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
      // Aktifkan hashbang mode untuk routing
    $locationProvider.hashPrefix('');

    // Redirect ke /home jika URL tidak cocok
    $urlRouterProvider.otherwise('/home');

    // Konfigurasi state menggunakan $stateProvider
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'view/home.html',
        controller: 'HomeController'
      })
      .state('aboutus', {
        url: '/about-us',
        templateUrl: 'view/aboutus.html',
        controller: 'AboutUsController'
      })
      .state('quote', {
        url: '/quote',
        templateUrl: 'view/quote.html',
        controller: 'QuoteController'
      });
  });
