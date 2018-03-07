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