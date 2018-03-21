var app = angular.module('collector', ['ui.bootstrap','ngRoute'])

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller: "body_controller"
    })
    .when("/login", {
        templateUrl : "login.html"
    })
    .when("/paris", {
        templateUrl : "paris.htm"
    })
    .otherwise({
        // templateUrl : "paris.htm",
        template: '<b> No Template found </b>',
        redirectTo: function() {
            return "/";
        }
    });


  //  $locationProvider.html5Mode(true);
});


app.controller('root_controller', function($scope,$http,$route, $routeParams, $location){

$scope.MainTitle = 'Collector Title Page';
$scope.FooterPage = 'footer.html';

});
