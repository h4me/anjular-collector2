var app = angular.module('collector', ['ui.bootstrap','ngRoute'])

app.config(function($routeProvider) {
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
    });
});


app.controller('root_controller', function($scope,$http,$route, $routeParams, $location){

$scope.MainTitle = 'Collector Title Page';
$scope.FooterPage = 'footer.html';

});
