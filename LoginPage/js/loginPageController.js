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

});