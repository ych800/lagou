angular.module('app').directive('customTopTitle',function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/customTopTitle.html',
		replace:true,
		scope:{
			titleText:'@'
		},
		link:function(scope,elem,attr){
			scope.title = scope.titleText;
		}
	}
});