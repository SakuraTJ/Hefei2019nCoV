$(function(){
	var myChart = echarts.init(document.getElementById('map'));
	$.get('./Echarts/hefei.json',function(geoJson){
		echarts.registerMap('hefei',geoJson,{});
		var option = {
			title: {
            text: '合肥市各县市新型肺炎确诊情况(2-1)',
            subtext: '数据来自合肥市卫健委',
            sublink: 'http://wjw.hefei.gov.cn/',
            },
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c} (人)'
		    },
		    visualMap: {
	            min: 0,
	            max: 20,
	            text:['High','Low'],
	            left: 'right',
	            realtime: false,
	            calculable: true,
	            inRange: {
	                color: ['#ffffff','#fff973', '#ffb273','#fe3f44','#a40004']
	            }
	        },
		    series: [
		        {
		        	name: '合肥市',
		            type: 'map',
		            mapType: 'hefei',
		            aspectScale: 0.85,  //地图长度比
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        color: '#333'
		                    }
		                }
		            },
		            data: [
		            	{name: '瑶海区', value: 8},
	                    {name: '庐阳区', value: 3},
	                    {name: '蜀山区', value: 7},
	                    {name: '包河区', value: 5},
	                    {name: '长丰县', value: 1},
	                    {name: '肥东县', value: 15},
	                    {name: '肥西县', value: 1},
	                    {name: '庐江县', value: 8},
	                    {name: '巢湖市', value: 3},
		            ]
		        }                              
		    ]
		};
		myChart.setOption(option);
	});
});
