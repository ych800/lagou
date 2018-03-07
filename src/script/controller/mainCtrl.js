angular.module('app').controller('mainCtrl',['$scope','$http','$cookies',function ($scope,$http,$cookies) {
	$scope.$on('$viewContentLoaded',function(){
		$scope.positionList = [];
		$scope.positionId = $cookies.get('positionId');

		$http.get('data/positionList.json',{params:{limit:10}}).success(function(res){
			if($scope.positionId){
				if(res && res.length){
					_.each(res,function(item){
						if(item.positionId == $scope.positionId){
							item.viewed = true;
						}

					});
					$cookies.remove('positionId');
				}
			}

			$scope.positionList = res;
			
		});
	})
}])