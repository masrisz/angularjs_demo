console.log('directive');

angular.module('myApp')
.directive('footerElement', function() {
    return {
      restrict: 'E',
      templateUrl: 'part/footer.html'
    };
  })

  .directive('headerElement', function() {
    return {
      restrict: 'E',
      templateUrl: 'part/header.html'
    };
  })