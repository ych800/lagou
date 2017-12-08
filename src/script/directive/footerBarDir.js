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