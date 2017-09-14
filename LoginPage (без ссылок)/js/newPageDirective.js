loginPage.directive("newPage", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["newPage"]];
        },
        restrict: "A",
        templateUrl: "templates/newPage.html",
        transclude: true
    }
});