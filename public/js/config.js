require.config({
    baseUrl: '/js/',
    paths: {
        'jquery': 'libs/jquery/jquery-2.1.4.min',
        'angular': 'libs/angular/angular',
        'angular-ui-router': 'libs/angular/angular-ui-router.min',
        'angular-animate': 'libs/angular/angular-animate',
        'angular-async-loader': 'libs/angular/angular-async-loader.min',
        'echarts': 'libs/echarts/echarts.common.min',
        'echarts-plain': 'libs/echarts/echarts-plain',
        'angular-echarts': 'libs/echarts/angular-echarts',
        'swiper': 'libs/swiper/swiper',
        'angular-swiper': 'libs/swiper/angular-swiper'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'swiper': {
            deps: ['angular'],
            exports: 'swiper'
        },
        'angular-swiper': {
            deps: ['angular'],
            exports: 'angular-swiper'
        },
        'angular-echarts': {
            deps: ['angular'],
            exports: 'angular-echarts'
        },
        'angular-ui-router': {deps: ['angular']},
        'angular-animate': {deps: ['angular']}
    }
});

require(['angular','./router'], function (angular) {
    'use strict';
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});

