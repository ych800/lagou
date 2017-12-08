angular.module('app').directive('appSearchBox',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/searchBox.html',
		replace:true,
		scope:{

		},
		link:function(scope,elem,attr){
			//搜索
			scope.search = function(){
				console.log('搜索...');
			}


		}
	}
}])