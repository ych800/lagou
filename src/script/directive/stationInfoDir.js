angular.module('app').directive('stationInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationInfo.html',
		replace:true,
		link:function(scope,elem,attr) {
			scope.positionItem = [];
			scope.$on('positionItem',function(e,data){
				scope.positionItem = data[0] || [];

				console.log(scope.positionItem);
			});
		}
	}
}])