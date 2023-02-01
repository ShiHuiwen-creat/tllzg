//柱状图模块1
(function(){
    var myChart = echarts.init(document.getElementById("1"), '#fff')
    var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: "12"
          },
          axisLine:{
              show:false,
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: "12"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 2
            }
          },
          // y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      myChart.setOption(option);
})();
// (function(){
//     var myChart = echarts.init(document.getElementById
//         ("id"), '#fff')
//     var option = {

//     };
//     myChart.setOption(option);

// })();
(function(){
    var myChart = echarts.init(document.getElementById("2"))
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
             // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
          }
        ],
        yAxis: [
          {
            type: 'value',
             // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
          }
        ],
        series: [
          
          {
            name: 'Direct',
            
            // color: 'rgba(255,255,255)',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
              areaColor: "#2B91B7",
              color: "#FFFFFF",
            },
            data: [62, 82, 91, 84, 109, 110, 120]
          },
          
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
})();
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.getElementById("3"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 柱状图2

(function() {
  var myChart = echarts.init(document.getElementById("5"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "西安" }, { name: "拉萨", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "银川", value: 100 }]
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  var YCData = [
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
      textStyle: {
        color: "#fff"
      },
      selectedMode: "multiple"
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      // 把中国地图放大了1.2倍
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart_1'));
  option = {
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}万元"
      },
      legend: {
          x: 'center',
          y: '15%',
          data: [ '张家口', '承德', '衡水','邢台', '邯郸', '保定','秦皇岛','石家庄', '唐山'],
          icon: 'circle',
          textStyle: {
              color: '#fff',
          }
      },
      calculable: true,
      series: [{
          name: '',
          type: 'pie',
          //起始角度，支持范围[0, 360]
          startAngle: 0,
          //饼图的半径，数组的第一项是内半径，第二项是外半径
          radius: [41, 100.75],
          //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
          center: ['50%', '40%'],
          //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
          // 'radius' 面积展现数据的百分比，半径展现数据的大小。
          //  'area' 所有扇区面积相同，仅通过半径展现数据大小
          roseType: 'area',
          //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: true,
                  formatter: '{c}万元'
              },
              emphasis: {
                  show: true
              }
          },
          labelLine: {
              normal: {
                  show: true,
                  length2: 1,
              },
              emphasis: {
                  show: true
              }
          },
          data: [{
                  value: 900.58,
                  name: '张家口',
                  itemStyle: {
                      normal: {
                          color: '#f845f1'
                      }
                  }
              },
              {
                  value: 1100.58,
                  name: '承德',
                  itemStyle: {
                      normal: {
                          color: '#ad46f3'
                      }
                  }
              },
              {
                  value: 1200.58,
                  name: '衡水',
                  itemStyle: {
                      normal: {
                          color: '#5045f6'
                      }
                  }
              },
              {
                  value: 1300.58,
                  name: '邢台',
                  itemStyle: {
                      normal: {
                          color: '#4777f5'
                      }
                  }
              },
              {
                  value: 1400.58,
                  name: '邯郸',
                  itemStyle: {
                      normal: {
                          color: '#44aff0'
                      }
                  }
              },
              {
                  value: 1500.58,
                  name: '保定',
                  itemStyle: {
                      normal: {
                          color: '#45dbf7'
                      }
                  }
              },
              {
                  value: 1500.58,
                  name: '秦皇岛',
                  itemStyle: {
                      normal: {
                          color: '#f6d54a'
                      }
                  }
              },
              {
                  value: 1600.58,
                  name: '石家庄',
                  itemStyle: {
                      normal: {
                          color: '#f69846'
                      }
                  }
              },
              {
                  value: 1800,
                  name: '唐山',
                  itemStyle: {
                      normal: {
                          color: '#ff4343'
                      }
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              {
                  value: 0,
                  name: "",
                  itemStyle: {
                      normal: {
                          color: 'transparent'
                      }
                  },
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              }
          ]
      }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
      myChart.resize();
  });
})();

(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts
  .init(document.getElementById('chart_2'));
  function showProvince() {
          myChart.setOption(option = {
              // backgroundColor: '#ffffff',
              visualMap: {
                  show: false,
                  min: 0,
                  max: 100,
                  left: 'left',
                  top: 'bottom',
                  text: ['高', '低'], // 文本，默认为数值文本
                  calculable: true,
                  inRange: {
                      color: ['rgb(10,18,64)', 'lightskyblue']
                  }
              },
              series: [{
                  type: 'map',
                  mapType: 'hunan',
                  roam: true,
                  label: {
                      normal: {
                          show: true
                      },
                      emphasis: {
                          textStyle: {
                              color: '#fff'
                          }
                      }
                  },
                  zoom:2,
                  itemStyle: {
                      normal: {
                          borderColor: 'rgb(0,0,0,0)',
                          areaColor: 'rgb(0,0,0,0)',
                      },
                      emphasis: {
                          areaColor: '#389BB7',
                          borderWidth: 0
                      }
                  },
                  animation: false,
                  data: [{
                      name: '长沙市',
                      value:  100
                  }, {
                      name: '株洲市',
                      value: 96
                  }, {
                      name: '湘潭市',
                      value: 98
                  }, ]
              }]
          });
  }

  var currentIdx = 0;
  showProvince();
  // 使用刚指定的配置项和数据显示图表。
  window.addEventListener("resize", function () {
      myChart.resize();
  });
})();

(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart_4'));

  myChart.setOption({
      series: [{
          type: 'map',
          mapType: 'hunan'
      }]
  });

  var geoCoordMap = {
      '怀化': [109.999867,27.518949],
      '吉首': [109.741528,28.332629],
      '张家界': [110.491722,29.112001],
      '常德': [111.701486,29.076683],
      '益阳': [112.348741,28.544124],
      '岳阳': [113.126486,29.382401],
      '长沙的某个地方': [113.019455,28.200103],
      '中南大学':[109.741528,28.332629],
      '株洲的某个地方': [113.163141,27.8418],
      '湘潭': [112.91977,27.882141],
      '邵阳': [111.467859,27.21915],
      '娄底': [112.012438,27.745506],
      '衡阳': [112.63809,26.895225],
      '永州': [111.577632,26.460144],
      '郴州': [113.039396,25.81497]
  };

  var goData = [
      // [{
      //     name: '张家界'

      // }, {
      //     id: 1,
      //     name: '常德',
      //     value: 86
      // }],
      // [{
      //     name: '吉首'

      // }, {
      //     id: 1,
      //     name: '常德',
      //     value: 86
      // }],
      // [{
      //     name: '常德'

      // }, {
      //     id: 1,
      //     name: '益阳',
      //     value: 70
      // }],
      // [{
      //     name: '益阳'

      // }, 
      // {
      //     id: 1,
      //     name: '长沙',
      //     value: 95
      // }],
      // [{
      //     name: '长沙'

      // }, {
      //     id: 1,
      //     name: '岳阳',
      //     value: 1
      // }],
      [{
          name: '长沙的某个地方'

      }, {
          id: 1,
          name: '湘潭',
          value: 80
      }],
      [{
          name: '长沙'

      }, {
          id: 1,
          name: '株洲的某个地方',
          value: 80
      }],
      [{
        name: '湘潭'

    }, {
        id: 1,
        name: '株洲的某个地方',
        value: 80
    }],
    [{
      name: '湘潭'

  }, {
      id: 1,
      name: '中南大学',
      value: 80
  }],
      // [{
      //     name: '长沙'

      // }, {
      //     id: 1,
      //     name: '衡阳',
      //     value: 1
      // }],
      // [{
      //     name: '衡阳'

      // }, {
      //     id: 1,
      //     name: '郴州',
      //     value: 1
      // }],
      // [{
      //     name: '衡阳'

      // }, {
      //     id: 1,
      //     name: '永州',
      //     value: 1
      // }],
      // [{
      //     name: '湘潭'

      // }, {
      //     id: 1,
      //     name: '娄底',
      //     value: 1
      // }],
      // [{
      //     name: '娄底'

      // }, {
      //     id: 1,
      //     name: '邵阳',
      //     value: 1  
      // }],
      // [{
      //     name: '邵阳'

      // }, {
      //     id: 1,
      //     name: '怀化',
      //     value: 1
      // }],
  ];
  //值控制圆点大小
  var backData = [
      // [{
      //     name: '常德'

      // }, {
      //     id: 1,
      //     name: '张家界',
      //     value: 1
      // }],
      // [{
      //     name: '常德'

      // }, {
      //     id: 1,
      //     name: '吉首',
      //     value: 1
      // }],
      // [{
      //     name: '益阳'

      // }, {
      //     id: 1,
      //     name: '常德',
      //     value: 1
      // }],
      // [{
      //     name: '长沙'

      // }, {
      //     id: 1,
      //     name: '益阳',
      //     value: 1
      // }],
      // [{
      //     name: '岳阳'

      // }, {
      //     id: 1,
      //     name: '长沙',
      //     value: 1
      // }],
      [{
          name: '湘潭'

      }, {
          id: 1,
          name: '长沙的某个地方',
          value: 95
      }],
      [{
          name: '株洲的某个地方'

      }, {
          id: 1,
          name: '长沙的某个地方',
          value: 95
      }],
      [{
        name: '株洲的某个地方'

    }, {
        id: 1,
        name: '湘潭',
        value: 80
    }],
      // [{
      //     name: '衡阳'

      // }, {
      //     id: 1,
      //     name: '长沙',
      //     value: 1
      // }],
      // [{
      //     name: '郴州'

      // }, {
      //     id: 1,
      //     name: '衡阳',
      //     value: 1
      // }],
      // [{
      //     name: '永州'

      // }, {
      //     id: 1,
      //     name: '衡阳',
      //     value: 1
      // }],
      // [{
      //     name: '娄底'

      // }, {
      //     id: 1,
      //     name: '湘潭',
      //     value: 1
      // }],
      // [{
      //     name: '邵阳'

      // }, {
      //     id: 1,
      //     name: '娄底',
      //     value: 1
      // }],
      // [{
      //     name: '怀化'

      // }, {
      //     id: 1,
      //     name: '邵阳',
      //     value: 1
      // }],
  ];

  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  var arcAngle = function(data) {
      var j, k;
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          if (dataItem[1].id == 1) {
              j = 0.2;
              return j;
          } else if (dataItem[1].id == 2) {
              k = -0.2;
              return k;
          }
      }
  }

  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (dataItem[1].id == 1) {
              if (fromCoord && toCoord) {
                  res.push([{
                      coord: fromCoord,
                  }, {
                      coord: toCoord,
                      value: dataItem[1].value //线条颜色

                  }]);
              }
          } else if (dataItem[1].id == 2) {
              if (fromCoord && toCoord) {
                  res.push([{
                      coord: fromCoord,
                  }, {
                      coord: toCoord
                  }]);
              }
          }
      }
      return res;
  };

  var color = ['#fff', '#FF1493', '#0000FF'];
  var series = [];
  [
      ['1', goData],
      ['2', backData]
  ].forEach(function(item, i) {
      series.push({
          name: item[0],
          type: 'lines',
          zlevel: 2,
          symbol: ['arrow', 'arrow'],
          //线特效配置
          effect: {
              show: true,
              period: 6,
              trailLength: 0.1,
              symbol: 'arrow', //标记类型
              symbolSize: 5
          },
          lineStyle: {
              normal: {
                  width: 1,
                  opacity: 0.4,
                  curveness: arcAngle(item[1]), //弧线角度
                  color: '#fff'
              }
          },
          edgeLabel: {
              normal: {
                  show: true,
                  textStyle: {
                      fontSize: 14
                  },
                  formatter: function(params) {
                      var txt = '';
                      if (params.data.speed !== undefined) {
                          txt = params.data.speed;
                      }
                      return txt;
                  },
              }
          },
          data: convertData(item[1])
      }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          //波纹效果
          rippleEffect: {
              period: 2,
              brushType: 'stroke',
              scale: 3
          },
          label: {
              normal: {
                  show: true,
                  color: '#fff',
                  position: 'right',
                  formatter: '{b}'
              }
          },
          //终点形象
          symbol: 'circle',
          //圆点大小
          symbolSize: function(val) {
              return val[2] / 8;
          },
          itemStyle: {
              normal: {
                  show: true
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
          })

      });

  });

  option = {
      title: {
          text: '',
          subtext: '',
          left: 'center',
          textStyle: {
              color: '#fff'
          }
      },
      tooltip: {
          trigger: 'item',
          formatter: '{b}'
      },
      //线颜色及飞行轨道颜色
      visualMap: {
          show: false,
          min: 0,
          max: 100,
          color: ['#31A031','#31A031']
      },
      //地图相关设置
      geo: {
          map: 'hunan',
          //视角缩放比例
          zoom: 1,
          //显示文本样式
          label: {
              normal: {
                  show: false,
                  textStyle: {
                      color: '#fff'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          //鼠标缩放和平移
          roam: true,
          zoom: 2,
          itemStyle: {
              normal: {
                  //          	color: '#ddd',
                  borderColor: 'rgba(147, 235, 248)',
                  borderWidth: 1,
                  areaColor: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.8,
                      colorStops: [{
                          offset: 0,
                          color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                      }, {
                          offset: 1,
                          color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(128, 217, 248, 1)',
                  // shadowColor: 'rgba(255, 255, 255, 1)',
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
              },
              emphasis: {
                  areaColor: '#389BB7',
                  borderWidth: 0
              }
          }
      },
      series: series
  };
  myChart.setOption(option);

})();
