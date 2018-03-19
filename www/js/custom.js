var app = angular.module('collector', ['ui.bootstrap'])

app.controller('root_controller', function($scope,$http){

$scope.MainTitle = 'Collector Title Page';
$scope.FooterPage = 'footer.html';
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
