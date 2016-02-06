angular.module('uiRouterHome.reports.service', [

])
.factory('reports', ['$http', 'utils', function ($http, utils) {
  var path = 'assets/reports.json';
  var reports = $http.get(path).then(function (resp) {
    return resp.data.reports;
  });

  var factory = {};
  factory.all = function () {
    console.log(reports);
    return reports;
  };
  factory.get = function (id) {
    return reports.then(function(){
      return utils.findById(reports, id);
    })
  };
  return factory;
}]);

