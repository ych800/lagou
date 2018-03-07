angular.module('app').directive('appPosition',['$http','$state','$cookies',function($http,$state,$cookies){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appPosition.html',
		replace:true,
		scope:{
			data:'='
		},
		link:function(scope,elem,attr){
			scope.goPositionDetail = function(item){
				item.viewed = true;
				$state.go('positionDetail',{'id':item.componyId});
				$cookies.put('positionId',item.positionId);
			}
		}
	}
}]);