console.log('controller');

angular.module('myApp')
.controller('QuoteController', ['$scope', 'dataService', function($scope, dataService) {
    console.log('QuoteController');
    $scope.data = [];  // Variabel untuk menyimpan data

    // Fungsi untuk mengambil data ketika controller diinisialisasi
    dataService.getData().then(function(data) {
      $scope.data = data;  // Menyimpan data yang diterima ke dalam scope
      console.log(data);
    });

  }]);