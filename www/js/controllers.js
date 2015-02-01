angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location, $state) {
    $scope.show_adverts = function() {
        alert(this.title);
        $state.go("app.advert-show"); 
    };
});