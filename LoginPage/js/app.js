var loginPage = angular.module("loginPage", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/loginpage',
        {
            templateUrl:'pages/loginP.html',
            controller:'loginPageController'
        });
        $routeProvider.when('/newpage',
        {
            templateUrl:'pages/newPage.html',
            controller:'loginPageController'
        });
        $routeProvider.otherwise({redirectTo: '/loginpage'});
}).run(function($rootScope, $templateCache) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined'){
                $templateCache.remove(current.templateUrl);
            }
        });
    });