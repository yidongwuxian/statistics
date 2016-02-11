require.config({
    baseUrl: '/js/',
    paths: {
        'angular': 'libs/angular/angular',
        'angular-ui-router': 'libs/angular/angular-ui-router.min',
        'angular-animate': 'libs/angular/angular-animate',
        'angular-async-loader': 'libs/angular/angular-async-loader.min',
        'echarts': 'libs/echarts/echarts.common.min',
        'angular-echarts': 'libs/echarts/angular-echarts.min'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']},
        'angular-animate': {deps: ['angular']}
    }
});

require(['angular','./router'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        //angular.element(document).find('html').addClass('ng-app');
    });
});

