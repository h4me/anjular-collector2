
function make_chart(id) {

Highcharts.chart(id, {
  credits: {
      enabled: false
  },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});


}

// make_chart('my');


app.controller('body_controller', function($scope,$http,$route, $routeParams, $location){

$scope.search_input = ''
$scope.sortType='name'


 $scope.totalItems = 64;
 $scope.currentPage = 1;
 $scope.itemsPerPage = 50;
 $scope.filteredrecords = [];
 $scope.records = [];

   $scope.figureOutTodosToDisplay = function() {
     var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
     var end = begin + $scope.itemsPerPage;
     $scope.filteredrecords = $scope.records.slice(begin, end);
      make_chart('my1');
      make_chart('my2');
    //  make_chart('my3');
    // make_chart('my3');
   };


   $http.get("fetch_table.json").then(function (response) {
         $scope.records = response.data.records;
         console.log("Load page ok fetch_table.json" )

         for(i=0;i<100;i++)
         {
           $scope.records.push({ name : "spoko"+i , phone: "444", age: "34"});
         }

         $scope.figureOutTodosToDisplay();

    }, function(response) {
           console.log("Error Can not load page fetch_table " + response.page )//Second function handles error
           $scope.content = "Something went wrong";
    });

});
