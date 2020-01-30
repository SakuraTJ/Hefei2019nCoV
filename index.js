$(function(){
	var myChart = echarts.init(document.getElementById('map'));
	$.get('./Echarts/hefei+.json',function(geoJson){
		echarts.registerMap('hefei',geoJson,{});
		var option = {
			title: {
            text: '合肥市新型肺炎确诊情况(1-30)',
            subtext: '数据来自合肥市卫健委&安徽省卫健委',
            sublink: 'http://wjw.hefei.gov.cn/'
            },
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c} (p / km2)'
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
		            	{name: '瑶海区', value: 7},
	                    {name: '庐阳区', value: 0},
	                    {name: '蜀山区', value: 3},
	                    {name: '包河区', value: 4},
	                    {name: '长丰县', value: 0},
	                    {name: '肥东县', value: 12},
	                    {name: '肥西县', value: 0},
	                    {name: '庐江县', value: 6},
	                    {name: '巢湖市', value: 3},
						
						{name: '芜湖市', value: 14},
	                    {name: '淮南市', value: 6},
	                    {name: '马鞍山市', value: 14},
	                    {name: '铜陵市', value: 10},
	                    {name: '安庆市', value: 18},
						{name: '滁州市', value: 4},
	                    {name: '六安市', value: 8}
		            ]
		        }                              
		    ]
		};
		myChart.setOption(option);
	});
});