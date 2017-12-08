angular.module('app').directive('searchHistoryKey',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/searchHistoryKey.html',
		replace:true,
		scope:{
			data:'='
		},
		link:function(scope,elem,attr){
			scope.list = scope.data;
			//搜索
			scope.removeItem = function(){
				console.log('删除该搜索记录...');
			}


		}
	}
}])