angular.module('app').directive('stationInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationInfo.html',
		replace:true
	}
}])