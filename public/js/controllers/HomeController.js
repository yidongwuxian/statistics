define(function (require) {
    var myapp = require('../app');
 
    myapp.controller('HomeController', ['$scope', function ($scope) {
          
          $scope.swiper = {};
         
          $scope.onReadySwiper = function(swiper) {
              console.log('onReadySwiper');
              swiper.on('slideChangeStart', function() {
                console.log('slideChangeStart');
              });
          };
    }]);
});
