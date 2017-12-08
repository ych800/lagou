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
    }).state('search',{
    	url:'/search',
    	templateUrl:'view/tpl/search.html',
    	controller:'searchCtrl'
    }).state('me',{
    	url:'/me',
    	templateUrl:'view/tpl/me.html',
    	controller:'meCtrl'
    }).state('positionDetail',{
    	url:'/positionDetail:id',
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



}]);
angular.module('app').controller('customForCityCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForCompanyCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForPositionCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForSalaryCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForSearchCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('loginCtrl',['$scope',function($scope){
	//样式处理
	var h = document.documentElement.clientHeight;
	var ele = document.getElementsByClassName('login')[0];
	ele.style.backgroundColor = '#02905a';
	ele.style.height = h +'px';

	

	//逻辑处理
}]);
angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
	
}])
angular.module('app').controller('meCtrl',['$scope',function ($scope) {
	
}])
angular.module('app').controller('positionDetailCtrl',['$scope',function($scope){

}]);

angular.module('app').controller('registerCtrl',['$scope',function($scop){
	//样式处理
	var h = document.documentElement.clientHeight;
	var ele = document.getElementsByClassName('register')[0];
	ele.style.backgroundColor = '#02905a';
	ele.style.height = h +'px';


	
}]);
angular.module('app').controller('searchCtrl',['$scope',function ($scope) {
	
}])
angular.module('app').directive('componyInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/componyInfo.html',
		replace:true
	}
}])
angular.module('app').directive('appCustom',function($state){
	return {
		restrict:'AE',
		templateUrl:'../view/tpl/component/appCustom.html',
		replace:true,
		scope:{},
		link:function(scope,elem,attr){
			scope.custom = function(isLogin){
				if(isLogin){
					$state.go('customForPosition');
				}
				else{
					$state.go('login');
				}
			}
		}
	}
});

angular.module('app').directive('footerBar',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/footerBar.html',
		replace:true,
		scope:{},
		link:function(scope,elem,attr){
			
		}
	}
}])
angular.module('app').directive('appFooter',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appFooter.html',
		replace:true
	}
}]);
angular.module('app').directive('appHeader',['$state',function($state){
	return{
		restrict:'AE',
		templateUrl:'../view/tpl/component/appHeader.html',
		replace:true,
		scope:{
			back:'@',
			home:'@',
			titleText:'@'
		},
		link:function(scope,elem,attrs){

			scope.titleText = scope.titleText;
			
			scope.goBack = function(){
				window.history.back();
			}

			scope.goHome = function(){
				$state.go('main');
			}
		}
	}
}])
angular.module('app').directive('appPosition',function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appPosition.html',
		replace:true,
		scope:{},
		link:function(scope,elem,attr){

		}
	}
});
angular.module('app').directive('appSearchBox',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/searchBox.html',
		replace:true,
		scope:{

		},
		link:function(scope,elem,attr){
			//搜索
			scope.search = function(){
				console.log('搜索...');
			}


		}
	}
}])
angular.module('app').directive('searchHistoryKey',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/searchHistoryKey.html',
		replace:true,
		scope:{
			data:'='
		},
		link:function(scope,elem,attr){
			scope.list = scope.data;
			//搜索
			scope.removeItem = function(){
				console.log('删除该搜索记录...');
			}


		}
	}
}])
angular.module('app').directive('stationDescribe',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationDescribe.html',
		replace:true
	}
}])
angular.module('app').directive('stationInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationInfo.html',
		replace:true
	}
}])