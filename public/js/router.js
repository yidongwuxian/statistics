angular.module('uiRouterHome', [
  'ui.router',
  'ngAnimate'
])
.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)
.config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('report', {//分析报告入口
          url: '/report',
          templateUrl: 'app/report.html',
        })
        .state("/",{//首页入口
          url:'/',
          templateUrl:'app/home.html'
        })
        .state("login",{//登录页入口
          url:'/login',
          templateUrl:'app/login.html'
        })
       .state("data",{//报表查询入口
        url:'/data',
        templateUrl:'app/data.html'
      })
      $urlRouterProvider.when("", "/");//默认展示首页
    }
  ]
);

