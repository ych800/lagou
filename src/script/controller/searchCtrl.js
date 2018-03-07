angular.module('app').controller('searchCtrl',['$scope','$state','$location','baseData','$cookies',function ($scope,$state,$location,baseData,$cookies) {
	
	$scope.$on('$viewContentLoaded',function(){
		$scope.isBack = true;
		$scope.cityList = baseData.cities;
		$scope.currentCity = '全部'
		
		if($cookies.currentCity && $cookies.currentCity.name){
			$scope.currentCity = $cookies.currentCity.name;
		}
		
		$scope.$on('cityselected',function(e,data){
			if($scope.cityList.length){
				for(var i=0;i<$scope.cityList.length;i++){
					for(j=0;j<$scope.cityList[i].list.length;j++){
						if($scope.cityList[i].list[j].id == data.id && $scope.cityList[i].list[j].name == data.name){
							$scope.cityList[i].list[j].selected = true;
						}else{
							$scope.cityList[i].list[j].selected = false;
						}	
					}
				}
			}

			$cookies.currentCity = {name:data.name,id:data.id};
		});


		$scope.searchFn = function(){
			console.log(1);
		}

	})

	
}])