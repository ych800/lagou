angular.module('app').directive('appCustomOptions',function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appCustomOptions.html',
		replace:true,
		scope:{
			list:'@'
		},
		link:function(scope,elem,attr){
			
		}
	}
});