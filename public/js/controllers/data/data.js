// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});        
// 使用
require(
    [
        'echarts',
        'echarts/chart/gauge',
        'echarts/chart/bar',
		'echarts/chart/pie'
    ],
	function(ec){

		var myGauge = ec.init(document.getElementById('myGauge'))
			myBar = ec.init(document.getElementById('myBar'))
			myPie = ec.init(document.getElementById('myPie'));

		var gaugeOption = {
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
		}	

		var barOption = {

			tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌'],
		        y:'bottom'
		    },
		    toolbox: {
		        show : true,
		        orient: 'vertical',
		        x: 'right',
		        y: 'center',
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
        			magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['周一','周二','周三','周四','周五','周六','周日'],
		            axisLabel: {
		            	textStyle: {
		            		fontSize: 12
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {
		            	textStyle: {
		            		fontSize: 12
		            	}
		            }
		        }
		    ],
		    series : [
		    	{
		            name:'直接访问',
		            type:'bar',
		            data:[320, 332, 301, 334, 390, 330, 320],
		            tooltip: {
		            	show: false
		            },
		        },
		        {
		            name:'邮件营销',
		            type:'bar',
		            stack: '广告',
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'联盟广告',
		            type:'bar',
		            stack: '广告',
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'视频广告',
		            type:'bar',
		            stack: '广告',
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'搜索引擎',
		            type:'bar',
		            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
		            markLine : {
		                itemStyle:{
		                    normal:{
		                        lineStyle:{
		                            type: 'dashed'
		                        }
		                    }
		                },
		                data : [
		                    [{type : 'min'}, {type : 'max'}]
		                ]
		        	}
		        }
		    ]
		};

		var idx = 1;
		var pieOption = {

			timeline : {
				show: false,
				data : [
		            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
		            { name:'2013-06-01', symbol:'emptyStar6', symbolSize:8 },
		            '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
		            { name:'2013-12-01', symbol:'star6', symbolSize:8 }
		        ],
		        label : {
		            formatter : function(s) {
		                return s.slice(0, 7);
		            }
		        }
		    },
		    options : [
	        {
	            
	            tooltip : {
	                trigger: 'item',
	                formatter: "{a} <br/>{b} : {c} ({d}%)"
	            },
	            legend: {
	                data:['Chrome','Firefox','Safari','IE9+','IE8'],
	                y:'bottom',
                    textStyle:{
                        fontSize:30
                    }
	            },
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    center: ['50%', '45%'],
	                    radius: '50%',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ],
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
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        }
    		]
		};
		myGauge.setOption(gaugeOption);
		myBar.setOption(barOption);
		myPie.setOption(pieOption);
	}
);
