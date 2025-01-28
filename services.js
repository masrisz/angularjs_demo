angular.module('myApp')
  .service('dataService', ['$http', function($http) {

    var randomnumber = Math.floor(Math.random() * 50) + 1;
    console.log(randomnumber);

    // URL API yang ingin diambil
    var apiUrl = 'https://dummyjson.com/quotes/' + randomnumber; // Ganti dengan URL API Anda

    // Fungsi untuk melakukan GET request dan mengambil data
    this.getData = function() {
      return $http.get(apiUrl)  // Menggunakan $http untuk GET request
        .then(function(response) {
            console.log(response);
          return response.data;  // Mengembalikan data yang diterima dari response
        })
        .catch(function(error) {
          console.error('Error fetching data:', error);  // Menangani error
        });
    };

  }]);