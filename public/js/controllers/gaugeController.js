//var app = require('./app');
//var app = angular.module('Demo', ['angular-echarts']);


angular.controller('gaugeController', ['$scope', function ($scope)  {
					

					$scope.guage = {

							label:{
								textStyle:{
									fontSize:20
								}
							},
						    tooltip : {
						        formatter: "{a} <br/>{b} : {c}%"  
						    },
						    
						    toolbox: {
						        show : true,
						        feature : {
						            restore : {show: true},
						            saveAsImage : {show: true}
						        }
						    },
						    series : [
						        {
						            name:'业务指标',
						            type:'gauge',
						            detail : {formatter:'{value}%'},
						            data:[{value: 85, name: '完成率'}],
						            itemStyle:{
						            	normal:{
						            		label:{
						            			textStyle:{
						            				fontSize:30
						            			}
						            		}
						            	}
						            }

						        }
						    ]
					};	

	
    }]);