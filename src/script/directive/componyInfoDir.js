angular.module('app').directive('componyInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/componyInfo.html',
		replace:true,
		link:function (scope,elem,attr) {
			scope.comBase = [];
			scope.$on('positionItem',function(e,data){
				scope.comBase = data[0]|| [];
			})
		}
	}
}])