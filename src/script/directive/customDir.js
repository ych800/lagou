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
