
Highcharts.chart('containerPopulation', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 25,
        depth: 70
      }
    },
    title: {
      text: 'Top 10 Populated  Areas in Greater St.louis Area'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      column: { colorByPoint: true,
        depth: 25
      }
    },
    xAxis: {
      categories: {0: 'Ferguson',
      1: 'Webster Groves',
      2: 'Hazelwood',
      3: 'Maryland Heights',
      4: 'Kirkwood',
      5: 'Ballwin',
      6: 'University City',
      7: 'Wildwood',
      8: 'Chesterfield',
      9: 'Florissant'},
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    series: [{
      name: 'Population',
      data: [21135, 23055, 25677, 27446, 27533, 30443, 35228, 35698, 47684, 52252]
    }]
  });



  Highcharts.chart('containerRevenue', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 25,
        depth: 70
      }
    },
    title: {
      text: 'General Revenue in Millions For Top 10 Populated Areas in Greater St.Louis Area'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      column: { colorByPoint: true,
        depth: 25
      }
    },
    xAxis: {
      categories: {0: 'Ferguson',
      1: 'Webster Groves',
      2: 'Hazelwood',
      3: 'Maryland Heights',
      4: 'Kirkwood',
      5: 'Ballwin',
      6: 'University City',
      7: 'Wildwood',
      8: 'Chesterfield',
      9: 'Florissant'},
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    series: [{
      name: 'General Revenue',
      data: [12.746894,
        14.955343,
        23.809852,
        22.42054,
        19.297564,
        17.62054,
        26.917526,
        9.051444,
        21.125292,
        23.120332]
    }]
  });



  Highcharts.chart('containerFF', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: -30,
        depth: 70
      }
    },
    title: {
      text: 'Fines and Fees Per Capita For Top 10 Populated Areas in Greater St.Louis Area'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      column: { colorByPoint: true,
        depth: 25
      }
    },
    xAxis: {
      categories: {0: 'Ferguson',
      1: 'Webster Groves',
      2: 'Hazelwood',
      3: 'Maryland Heights',
      4: 'Kirkwood',
      5: 'Ballwin',
      6: 'University City',
      7: 'Wildwood',
      8: 'Chesterfield',
      9: 'Florissant'},
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    series: [{
      name: 'Fines and Fees Per Capita',
      data: [86.70542134,
        43.85714162,
        50.92387312,
        63.57997741,
        19.20204627,
        33.89213415,
        16.22333797,
        17.22898818,
        28.10466509,
        46.34840542]
    }]
  });


  Highcharts.chart('containerST', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: -30,
        depth: 70
      }
    },
    title: {
      text: 'Sales Tax Per Capita For Top 10 Populated Areas in Greater St.louis'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      column: { colorByPoint: true,
        depth: 25
      }
    },
    xAxis: {
      categories: {0: 'Ferguson',
      1: 'Webster Groves',
      2: 'Hazelwood',
      3: 'Maryland Heights',
      4: 'Kirkwood',
      5: 'Ballwin',
      6: 'University City',
      7: 'Wildwood',
      8: 'Chesterfield',
      9: 'Florissant'},
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    series: [{
      name: 'Sales Tax Per Capita',
      data: [354.08488289999997,
        276.1106918,
        282.6922538,
        263.39663340000004,
        335.4544728,
        268.6100581,
        259.3674918,
        189.7444115,
        128.4468585,
        279.7349001]
    }]
  });