angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/tpl.sidebar-menu.html",
        controller: 'AppCtrl'
    })

    .state('app.addvert-search', {
        url: "/advert-search",
        views: {
            'menuContent': {
                templateUrl: "templates/tpl.advert-search.html"
            }
        }
    })
    
    .state('app.advert-add', {
        url: "/advert-add",
        views: {
            'menuContent': {
                templateUrl: "templates/tpl.advert-add.html"
            }
        }
    })
    
    .state('app.advert-own', {
        url: "/advert-own",
        views: {
            'menuContent': {
                templateUrl: "templates/tpl.advert-own.html"
            }
        }
    })
    
    .state('app.advert-show', {
        url: "/advert-show",
        views: {
            'menuContent': {
                templateUrl: "templates/tpl.advert-show.html"
            }
        }
    })
    
    .state('app.chat', {
        url: "/chat",
        views: {
            'menuContent': {
                templateUrl: "templates/tpl.chat.html"
            }
        }
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/advert-search');
});
