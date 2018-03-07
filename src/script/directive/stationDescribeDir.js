angular.module('app').directive('stationDescribe',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationDescribe.html',
		replace:true,
		link:function(scope,elem,attr){
			scope.positionDescribe = [];
			scope.$on('positionItem',function(e,data){
				scope.positionDescribe = data[0].positionDescribe || [];
			});
		}
	}
}])