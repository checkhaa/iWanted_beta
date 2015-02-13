angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $state, $ionicModal ) {
    
    // Kategorie auswahl mit Modal
    $http.get('http://iwanted.setcode.de/page.advert-search.php').success(function(data){
        $scope.advertcategory = data;
    });
  
    $ionicModal.fromTemplateUrl('advert_category.html', function(modal) {
        $scope.modal_advert_category = modal;
    }, { 
        scope: $scope,
        animation: 'slide-in-up',
        focusFirstInput: true
    });

    $scope.advert_category = {"msg" : 'Kategorie auswählen'};
    $scope.open_category = function() {          
        $scope.modal_advert_category.show();
    };
    
    $scope.hide_category = function() {
        $scope.modal_advert_category.hide();
    };
    
    $scope.change_category = function(item) { 
        // Kategorie auswahl
        $scope.advert_category.msg = item;
        $scope.modal_advert_category.hide();
        
        // Ort auswahl einblenden
        $('.city_search').fadeIn("normal");
       
        
        
        /*
        dataString = 'advert_category_id='+this.advertcategory.advert_category_id;
        $http.post('http://iwanted.setcode.de/page.advert-show.php?'+dataString).success(function(data){
            if(data != 'no_results'){
                $state.go("app.advert-show");
                $scope.advertresult = data;
            } else {
                $state.go("app.advert-no-result");   
            }
        });
        */
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
    
});