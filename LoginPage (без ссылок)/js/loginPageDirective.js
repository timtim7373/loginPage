loginPage.directive("loginPage", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["loginPage"]];
        },
        restrict: "A",
        templateUrl: "templates/loginPage.html",
        transclude: true
    }
});