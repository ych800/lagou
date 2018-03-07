angular.module('app').directive('appCityList',['$state','$q',function($state,$q){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appCityList.html',
		replace:true,
		scope:{
			list:'@'
		},
		link:function(scope,elem,attr){
			scope.data = JSON.parse(scope.list);
			//console.log(scope.data)
			//选择城市
			scope.selectCity = function(item,e){
				for(var i=0;i<scope.data.length;i++){
					for(j=0;j<scope.data[i].list.length;j++){
						scope.data[i].list[j].selected = false;
					}
				}

				item.selected = true;

				console.log(item);

				scope.$emit('cityselected',item);
				$state.go('search.index');
			}


		}
	}
}]);