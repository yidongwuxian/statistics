define(function (require) {
    
    var app = require('./app');

    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      
        $urlRouterProvider.when("", "/");  //默认展示首页 

        $stateProvider
          .state("home", {                    //首页入口
            url:'/',
            templateUrl: 'app/home.html',
            controllerUrl: 'controllers/HomeController',
            controller: 'HomeController'
          })
          .state("data", {      //报表查询入口
            url:'/data',
            templateUrl: 'app/data.html',
            controllerUrl: 'controllers/DataController',
            controller: 'DataController'
          })
                 
    }]);

});

