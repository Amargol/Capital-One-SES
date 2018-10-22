var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["3069", "3030", "3005", "3064", "3031", "3014", "3042", "3082", "3022", "3067", "3035", "3038", "3055", "3068", "3049", "3034", "3048", "3063", "3007", "3006", "3027", "3032", "3074", "3062", "3052", "3047", "3008", "3075", "3051", "3023", "3016", "3019", "3076", "3029", "3058", "3024", "3026", "3056", "3066", "3046", "3011", "3021", "3018", "3028", "3037", "3036", "3040", "3065", "3078", "3054", "3077", "3059", "3033", "3079", "3025", "3081", "3020", "3010", "3060", "3057", "3080", "3045", "3039", "4108", "3009", "3000", "3053"],
        datasets: [{
            label: 'Number of Bikes checked out',
            data: [5138, 5059, 4883, 4661, 4629, 4571, 4015, 3908, 3893, 3797, 3406, 3306, 3270, 3252, 3154, 3037, 3005, 2949, 2785, 2708, 2557, 2466, 2341, 2325, 2253, 2230, 2156, 2125, 2062, 1980, 1953, 1910, 1903, 1902, 1808, 1646, 1562, 1461, 1425, 1348, 1257, 1254, 1211, 1179, 1174, 1153, 1023, 992, 879, 865, 802, 742, 709, 693, 626, 593, 528, 427, 383, 380, 191, 187, 115, 108, 56, 29, 13],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
              scaleLabel: {
                display: true,
                labelString: 'Station ID'
              },        
              ticks: {
                  beginAtZero:true
              }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }]
        }
    }
});

var ctx2 = document.getElementById("myChart1").getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ["3005", "3031", "3014", "3042", "3069", "3082", "3064", "3022", "3030", "3063", "3035", "3067", "3038", "3048", "3034", "3006", "3032", "3023", "3049", "3055", "3074", "3075", "3008", "3062", "3019", "3047", "3007", "3076", "3058", "3051", "3016", "3027", "3052", "3011", "3021", "3056", "3037", "3036", "3018", "3029", "3026", "3066", "3046", "3065", "3068", "3000", "3078", "3054", "3077", "3033", "3024", "3040", "3059", "3079", "3025", "3081", "3020", "3028", "3010", "3057", "3060", "3045", "3080", "4108", "3039", "3009", "3053"],
        datasets: [{
            label: 'Number of Bikes checked in',
            data: [6262, 5517, 5385, 5293, 5072, 4703, 4605, 4337, 4224, 3763, 3513, 3481, 3194, 3156, 3032, 2826, 2778, 2495, 2489, 2460, 2361, 2276, 2242, 2204, 2175, 1994, 1993, 1960, 1944, 1939, 1906, 1861, 1497, 1491, 1490, 1481, 1427, 1424, 1402, 1399, 1212, 1203, 1134, 1016, 983, 955, 883, 840, 811, 778, 760, 737, 722, 717, 713, 644, 604, 521, 412, 399, 389, 319, 178, 155, 115, 68, 12],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
              scaleLabel: {
                display: true,
                labelString: 'Station ID'
              },        
              ticks: {
                  beginAtZero:true
              }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }]
        }
    }
});

var ctx3 = document.getElementById("myChart2").getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'horizontalBar',
    data: {
        labels: ["3068", "3024", "3030", "3055", "3007", "3052", "3027", "3049", "3028", "3029", "3026", "3067", "3040", "3047", "3066", "3046", "3051", "3062", "3038", "3069", "3064", "3016", "3054", "3059", "3010", "3080", "3034", "3053", "3039", "3078", "3060", "3077", "3009", "3056", "3074", "3057", "3065", "3079", "4108", "3081", "3076", "3033", "3020", "3008", "3025", "3035", "3006", "3045", "3058", "3075", "3048", "3018", "3011", "3021", "3037", "3019", "3036", "3032", "3022", "3023", "3082", "3014", "3063", "3031", "3000", "3042", "3005"],
        datasets: [{
            label: 'Average Discrepancy (Bikes checked in - Bikes check out) / Day',
            data: [-8.43, -3.29, -3.1, -3.01, -2.94, -2.81, -2.59, -2.47, -2.45, -1.87, -1.3, -1.17, -1.06, -0.88, -0.83, -0.8, -0.46, -0.45, -0.42, -0.25, -0.21, -0.17, -0.09, -0.07, -0.06, -0.05, -0.02, -0.0, 0.0, 0.01, 0.02, 0.03, 0.04, 0.07, 0.07, 0.07, 0.09, 0.09, 0.17, 0.19, 0.21, 0.26, 0.28, 0.32, 0.32, 0.4, 0.44, 0.49, 0.51, 0.56, 0.56, 0.71, 0.87, 0.88, 0.94, 0.99, 1.01, 1.16, 1.65, 1.91, 2.96, 3.03, 3.03, 3.3, 3.44, 4.75, 5.13],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
              scaleLabel: {
                display: true,
                labelString: 'Station ID'
              },        
              ticks: {
                  beginAtZero:true
              }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }]
        }
    }
});

var ctx4 = document.getElementById("myChart3").getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'horizontalBar',
    data: {
        labels: ["Walk-up", "Flex Pass", "Monthly Pass", "Culminative"],
        datasets: [{
            label: 'Average Distance Between Pickup and Dropoff Stations',
            data: [0.0, 68.79, 76.37, 75.19],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
              scaleLabel: {
                display: true,
                labelString: 'Station ID'
              },        
              ticks: {
                  beginAtZero:true
              }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }]
        }
    }
});

var hiddens = document.getElementsByClassName('hidden')
var overlays = document.getElementsByClassName('overlay')

function show(index, e) {
  e.style.visibility = "hidden"
  hiddens[index].style.height = "auto"
  overlays[index].style.visibility = "hidden"
}