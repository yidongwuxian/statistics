var app = angular.module('uiRouterHome.reports', [
  'ui.router'
])
.config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $urlRouterProvider.when("/report", "report/1");
      $stateProvider
      .state('reports', {
          abstract: true,
          url: '/reports',
          templateUrl: 'app/report/report.html',
        })
       .state('report.detail', {
          url: '/{reportId:[0-9]{1,4}}',
          views: {
            '': {
              templateUrl: 'app/report/report.detail.html',
              controller: ['$scope', '$stateParams', 'utils','reports',"$http",
                function ($scope,   $stateParams,utils,reports,$http) {
                  $http.get("assets/reports.json")
                  .success(function(response) {
                    $scope.isHide = true;
                    $scope.reports = response.reports;
                      $scope.report = utils.findById($scope.reports, $stateParams.reportId);
                       $scope.downloadShow = function () {
                          $scope.isHide = false;
                       }
                       $scope.downloadHide = function () {
                          $scope.isHide = true;
                       }
                  });

                }]
            },
          }
        })
   }
  ]);