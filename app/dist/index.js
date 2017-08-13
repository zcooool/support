//codegenApp
var codegenApp = angular.module("codegenApp", [
    "ui.router", 
    "oc.lazyLoad",  
    "ngSanitize",

]); 

codegenApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);

//全局配置
codegenApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

codegenApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        assetsPath: '../assets',
    };

    $rootScope.settings = settings;

    return settings;
}]);

codegenApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard.html");  
    $stateProvider.state('dashboard', {
            url: "/dashboard.html",
            templateUrl: "../dist/views/hello.html",            
        }) 
        .state('codegen1',{
            url:'/codegen1',
            templateUrl: "../dist/views/codegen/simpleQuery.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([ {
                        name: 'codegenApp',
                        files: [
                            '../dist/controllers/codegen/SimpleQueryPageController.js'
                        ]
                    }]);
                }]
            }
        })




    
    
    }
]);

codegenApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
}]);
