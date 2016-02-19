define(function (require, exports, module) {
    
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('jquery');
    require('angular-animate');
    require('angular-ui-router');
    require('echarts');
    require('echarts-plain');
    require('angular-echarts');
    require('swiper');
    require('angular-swiper');
    
    var app = angular.module('app', ['ui.router','ksSwiper','angular-echarts']);   //依赖router、swiper

    asyncLoader.configure(app);

    module.exports = app;
});

