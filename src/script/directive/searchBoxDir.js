angular.module('app').directive('appSearchBox',['$state',function($state){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/searchBox.html',
		replace:true,
		scope:{
			city:'@'
		},
		link:function(scope,elem,attr){
			scope.city = scope.city;

			//console.log(searchCtrl);
			//console.log(scope);

			scope.search = function(){
				console.log('搜索...');
				console.log(scope.searchKey);
			}


		}
	}
}])