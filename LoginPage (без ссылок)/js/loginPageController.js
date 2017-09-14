var loginPage = angular.module("loginPage", []);

var loginPageController = loginPage.controller("loginPageController", function ($scope, $compile) {

    $scope.lp = {};

    $scope.language = {
        en: {
            title: "Sign in",
            userNameLabel: "Name",
            userName: "Enter your name",
            passwordLabel: "Password",
            password: "",
            button: "Sign in",
            p: "You are signed in as: ",
            logout: "logout"
        },
        ru: {
            title: "Войти",
            userNameLabel: "Имя",
            userName: "Введите ваше имя",
            passwordLabel: "Пароль",
            password: "",
            button: "Войти",
            p: "Вы вошли как: ",
            logout: "Выйти"
        },
        selected: "EN",
        select: function () {
            if ($scope.language.selected === "EN") $scope.lp = $scope.language.en;
            else if ($scope.language.selected === "RU") $scope.lp = $scope.language.ru;
        }
    };

    $scope.lp = $scope.language.en;

    $scope.signIn = function () {
        var loginPage = angular.element(document.querySelector("div[login-page]"));
        loginPage.remove();
        $scope.lp.title = $scope.lp.userName;

        var newPage = angular.element("<div new-page>");
        var body = angular.element(document.querySelector("body"));
        compileFn = $compile(newPage);
        compileFn($scope);
        body.prepend(newPage);
    };

    $scope.logout = function () {
        var newPage = angular.element(document.querySelector("div[new-page]"));
        newPage.remove();
        $scope.language.select();

        var loginPage = angular.element("<div login-page>");
        var body = angular.element(document.querySelector("body"));
        compileFn = $compile(loginPage);
        compileFn($scope);
        body.prepend(loginPage);
    };
});