angular.module('app').controller('positionDetailCtrl',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	$scope.$on('$viewContentLoaded',function(){
		$scope.positionItem = [];
		$scope.componyId = $stateParams.id;

		$http.get('data/positionDetail.json',{
			params:{
				componyId:$scope.componyId
			}
		}).success(function(res){
			if(res && res.length){
				$scope.positionItem= _.filter(res,{"componyId":$scope.componyId});

				$scope.$broadcast('positionItem',$scope.positionItem);
			}			
		})
	})
}]);
