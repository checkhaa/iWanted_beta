angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $location, $state, $ionicScrollDelegate ) {

    // Kategorie für das Suchen holen
    $http.get('http://iwanted.setcode.de/page.advert-search.php').success(function(result){
        $scope.advertcategory = {data: result};
    });
    
    // Kategorie für das Hinzufügen holen
    $http.get('http://iwanted.setcode.de/page.advert-search.php?no-all').success(function(result){
        $scope.advertaddcategory = {data: result};
    });   
    
    // Suche Starten und Ergebnisse anzeigen
    $scope.show_adverts = function(advertsearch) {    
        dataString = 'advert_category_id='+advertsearch.advertcat;
        $http.post('http://iwanted.setcode.de/page.advert-show.php?'+dataString).success(function(data){
            if(data != 'no_results'){
                $state.go("app.advert-show");
                $scope.advertresult = data;
            } else {
                $state.go("app.advert-no-result");   
            }
        });
    };
    
    
    // Anzeige hinzufügen
    $scope.add_adverts = function(advertadd) {
        dataString = 'advert_category_id='+advertadd.advertcat+'&advert_description='+advertadd.advert_description;
        $http.post('http://iwanted.setcode.de/page.advert-add.php?'+dataString).success(function(data){
            if(data == 'success'){
                $state.go('app.advert-own', {}, {reload: true, inherit: false});  
            }
        });
    }
    
    
    
    $scope.showTime = true;
    
    var alternate, isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

    $scope.sendMessage = function() {
        alternate = !alternate;
        
        var d = new Date();
        d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
        
        $scope.messages.push({
            userId: alternate ? '12345' : '54321',
            text: $scope.data.message,
            time: d
        });
        
        delete $scope.data.message;
        $ionicScrollDelegate.scrollBottom(true);

    };

    $scope.inputUp = function() {
        if (isIOS) $scope.data.keyboardHeight = 216;
        $timeout(function() {
            $ionicScrollDelegate.scrollBottom(true);
        }, 300);
    };

    $scope.inputDown = function() {
        if (isIOS) $scope.data.keyboardHeight = 0;
        $ionicScrollDelegate.resize();
    };

    $scope.closeKeyboard = function() {
        // cordova.plugins.Keyboard.close();
    };

    $scope.data = {};
    $scope.myId = '54321';
    $scope.messages = [];
});


