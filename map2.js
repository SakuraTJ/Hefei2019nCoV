$(function(){
	var myChart = echarts.init(document.getElementById('map2'));
	$.getJSON('./Data/citydata.json',function(citydata){
	$.get('./Echarts/hefei+.json',function(geoJson){
		echarts.registerMap('hefei',geoJson,{});
		var option = {
			title: {
            text: '合肥市周边新型肺炎确诊情况(2-1)',
            subtext: '数据来自安徽省卫健委',
            sublink: 'http://wjw.ah.gov.cn/'
            },
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c} (人)'
		    },
		    visualMap: {
	            min: 0,
	            max: 50,
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
		        	name: '合肥市周边',
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
		            	{name: '合肥市', value: citydata[0]["value"]},				
						{name: '芜湖市', value: citydata[1]["value"]},
	                    {name: '淮南市', value: citydata[2]["value"]},
	                    {name: '马鞍山市', value: citydata[3]["value"]},
	                    {name: '铜陵市', value: citydata[4]["value"]},
	                    {name: '安庆市', value: citydata[5]["value"]},
						{name: '滁州市', value: citydata[6]["value"]},
	                    {name: '六安市', value: citydata[7]["value"]}
		            ]
		        }                              
		    ]
		};
		myChart.setOption(option);
	});
    });
});
