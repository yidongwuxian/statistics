define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('angular-animate');
    require('angular-ui-router');
    require('echarts');
    require('angular-echarts');
    //require('services/services'),
    //require('controllers/controllers');
    //require('controllers/pie-controller');
    //require('directives/directives');
    //require('directives/barChart-directive');
    //require('gauge-directive');
    //require('services/echart-service');


    var app = angular.module('app', ['ui.router']);

    asyncLoader.configure(app);

    module.exports = app;
});

