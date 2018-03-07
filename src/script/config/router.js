//配置页面路由
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    //默认匹配路由
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/tpl/main.html',
        controller:'mainCtrl'
    }).state('search',{
    	url:'/search',
        views:{
            '':{
                templateUrl:'view/tpl/search.html',
                controller: function($state){
                    $state.go('search.index');
                }
            }
        }
    	//controller:'searchCtrl'
    }).state('search.index',{
        url:'/index',
        templateUrl:'view/tpl/component/searchIndex.html',
        controller:'searchCtrl',
        params:{
            type:'searchIndex'
        }
    }).state('search.city',{
        url:'/city',
        templateUrl:'view/tpl/component/searchCity.html',
        controller:'searchCtrl',
        params:{
            type:'searchCity'
        }
    }).state('me',{
    	url:'/me',
    	templateUrl:'view/tpl/me.html',
    	controller:'meCtrl'
    }).state('positionDetail',{
    	url:'/positionDetail/:id',
    	templateUrl:'view/tpl/positionDetail.html',
    	controller:'positionDetailCtrl'
    })

    //登录
    .state('login',{
        url:'/login',
        templateUrl:'view/tpl/login.html',
        controller:'loginCtrl'
    })
    //注册
    .state('register',{
        url:'/register',
        templateUrl:'view/tpl/register.html',
        controller:'registerCtrl'
    })
    //定制
    .state('customForPosition',{
        url:'/customForPosition',
        templateUrl:'view/tpl/customForPosition.html',
        controller:'customForPositionCtrl'
    }).state('customForCity',{
        url:'/customForCity',
        templateUrl:'view/tpl/customForCity.html',
        controller:'customForCityCtrl'
    }).state('customForSalary',{
        url:'/customForSalary',
        templateUrl:'view/tpl/customForSalary.html',
        controller:'customForSalaryCtrl'
    }).state('customForCompany',{
        url:'/customForCompany',
        templateUrl:'view/tpl/customForCompany.html',
        controller:'customForCompanyCtrl'
    }).state('customForSearch',{
        url:'/customForSearch',
        templateUrl:'view/tpl/customForSearch.html',
        controller:'customForSearchCtrl'
    })
    //city
    .state('city',{
        url:'/city',
        templateUrl:'view/tpl/city.html',
        controller:'cityCtrl'
    }) 


}]);