
loginPage.controller("loginPageController", function ($scope, $compile, $location, $templateCache) {

    $scope.lp = {};

    $scope.language = {
        en: {
            title: "Login Page",
            h1: "Sign in",
            userNameLabel: "Name",
            userName: "Enter your name",
            passwordLabel: "Password",
            password: "",
            button: "Sign in",
            p: "You are signed in as: ",
            logout: "logout"
        },
        ru: {
            title: "Login Page",
            h1: "Войти",
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
      // $scope.lp.title = $scope.lp.userName;
      // if ($scope.language.selected === "EN") $scope.lp = $scope.language.en;
      // else if ($scope.language.selected === "RU") $scope.lp = $scope.language.ru;
    };
    $scope.location = function (answer, answerForm) {
        $location.path("newpage");
    };
    $scope.$on('$routeChangeSuccess', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            console.log(next.scope.lp);
            console.log(current.scope.lp);
            next.scope.lp = current.scope.lp;
            next.scope.language.selected = current.scope.language.selected;
            next.scope.lp.title = current.scope.lp.userName;
        }
    });
});