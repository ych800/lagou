angular.module('app').controller('loginCtrl',['$scope','$http','$state','$cookies',function($scope,$http,$state,$cookies){
	//样式处理
	/*var h = document.documentElement.clientHeight;
	var ele = document.getElementsByClassName('login')[0];
	ele.style.backgroundColor = '#02905a';
	ele.style.height = h +'px';*/

	

	//逻辑处理
	$scope.user = {};
	$scope.phoneChang = false;
	$scope.pwdChange = false;

	$http.post('data/login.json',$scope.user).success(function(res){
		if(res.status == 200){
			//console.log('登录成功!');
			$cookies.put("user",{id:res.userId,phone:$scope.user.phone});
			$state.go('main');
		}
	})


}]);