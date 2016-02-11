// angular.module('uiRouterHome', [
//   'ui.router',
//   'ngAnimate'
// ])
// .run(
//   ['$rootScope', '$state', '$stateParams',
//     function ($rootScope,   $state,   $stateParams) {
//       $rootScope.$state = $state;
//       $rootScope.$stateParams = $stateParams;
//     }
//   ]
// )
// .config(
//   ['$stateProvider', '$urlRouterProvider',
//     function ($stateProvider,   $urlRouterProvider) {
//       $stateProvider
//         .state('report', {//分析报告入口
//           url: '/report',
//           templateUrl: 'app/report.html',
//         })
//         .state("/",{//首页入口
//           url:'/',
//           templateUrl:'app/home.html'
//         })
//         .state("login",{//登录页入口
//           url:'/login',
//           templateUrl:'app/login.html'
//         })
//        .state("data",{//报表查询入口
//         url:'/data',
//         templateUrl:'app/data.html'
//       })
//       $urlRouterProvider.when("", "/");//默认展示首页
//     }
//   ]
// );


define(function (require) {
    var app = require('./app');
    //var app = angular.module('app', ['ui.router','ngAnimate']);
    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      'use strict';  
        $stateProvider.state("data", {      //报表查询入口
          url:'/data',
          //templateUrl:'app/data.html'
          views: {
            '': { templateUrl: 'app/data.html' }
            //"gauge-chart@charts": {
                 //templateUrl: 'app/data.html',
                 //controllerUrl:'controllers/gaugeController',
                 //controller: 'gaugeController'
            // },
            // "bar-chart@charts": {
            //     templateUrl: 'app/charts-bar.html',
            //     controllerUrl:'controllers/barController',
            //     controller: 'barController'
            // },
            // "pie-chart@charts": {
            //     templateUrl: 'app/charts-pie.html',
            //     controllerUrl:'controllers/pieController',
            //     controller: 'pieController'
            // }
          }
        })
        .state("home",{                    //首页入口
          url:'/',
          templateUrl:'app/home.html'
        })
        $urlRouterProvider.when("", "/");  //默认展示首页 
    }]);
});

