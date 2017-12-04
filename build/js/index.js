/*页面启动*/
angular.module('app',['ui.router']);
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
angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
	$scope.isBack = true;
	$scope.isHome = true;
}])
angular.module('app').directive('appHeader',['$state',function($state){
	return{
		restrict:'AE',
		templateUrl:'../view/tpl/component/appHeader.html',
		replace:true,
		scope:{
			back:'=',
			home:'=',
			titleText:'@'
		},
		link:function(scope,elem,attrs){
			//scope.textTitle = scope.textTitle;
			console.log(scope);
			scope.titleText = scope.titleText;
			//elem.children('.title').text(scope.titleText);
			if(scope.back){
				//点击返回
				scope.goBack = function(){
					console.log(1);
					window.history.back();
				}
			}

			if(scope.home){
				scope.goHome = function(){
					console.log(2);
					$state.go('/main');
				}
			}
		}
	}
}])