//配置页面路由
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    //默认匹配路由
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/tpl/main.html',
        controller:'mainCtrl'
    })
}]);