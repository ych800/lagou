/*页面启动*/
angular.module('app',['ui.router','ngCookies']);

angular.module('app').value('baseData',{}).run(['$http','baseData',function($http,baseData){
	//获取city数据
	$http.get('data/cityList.json').success(function(data){
		if(data && data.length){
			//console.log(data);
			baseData.cities = data;
		}
	})
}])
//配置页面路由
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    //默认匹配路由
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/tpl/main.html',
        controller:'mainCtrl'
    }).state('search',{
    	url:'/search',
        views:{
            '':{
                templateUrl:'view/tpl/search.html',
                controller: function($state){
                    $state.go('search.index');
                }
            }
        }
    	//controller:'searchCtrl'
    }).state('search.index',{
        url:'/index',
        templateUrl:'view/tpl/component/searchIndex.html',
        controller:'searchCtrl',
        params:{
            type:'searchIndex'
        }
    }).state('search.city',{
        url:'/city',
        templateUrl:'view/tpl/component/searchCity.html',
        controller:'searchCtrl',
        params:{
            type:'searchCity'
        }
    }).state('me',{
    	url:'/me',
    	templateUrl:'view/tpl/me.html',
    	controller:'meCtrl'
    }).state('positionDetail',{
    	url:'/positionDetail/:id',
    	templateUrl:'view/tpl/positionDetail.html',
    	controller:'positionDetailCtrl'
    })

    //登录
    .state('login',{
        url:'/login',
        templateUrl:'view/tpl/login.html',
        controller:'loginCtrl'
    })
    //注册
    .state('register',{
        url:'/register',
        templateUrl:'view/tpl/register.html',
        controller:'registerCtrl'
    })
    //定制
    .state('customForPosition',{
        url:'/customForPosition',
        templateUrl:'view/tpl/customForPosition.html',
        controller:'customForPositionCtrl'
    }).state('customForCity',{
        url:'/customForCity',
        templateUrl:'view/tpl/customForCity.html',
        controller:'customForCityCtrl'
    }).state('customForSalary',{
        url:'/customForSalary',
        templateUrl:'view/tpl/customForSalary.html',
        controller:'customForSalaryCtrl'
    }).state('customForCompany',{
        url:'/customForCompany',
        templateUrl:'view/tpl/customForCompany.html',
        controller:'customForCompanyCtrl'
    }).state('customForSearch',{
        url:'/customForSearch',
        templateUrl:'view/tpl/customForSearch.html',
        controller:'customForSearchCtrl'
    })
    //city
    .state('city',{
        url:'/city',
        templateUrl:'view/tpl/city.html',
        controller:'cityCtrl'
    }) 


}]);
angular.module('app').controller('cityCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForCityCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForCompanyCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForPositionCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForSalaryCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

angular.module('app').controller('customForSearchCtrl',['$scope',function($scope){
	$scope.isBack = true;
}])

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
angular.module('app').controller('meCtrl',['$scope',function ($scope) {
	
}])
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

angular.module('app').controller('registerCtrl',['$scope',function($scop){
	//样式处理
	var h = document.documentElement.clientHeight;
	var ele = document.getElementsByClassName('register')[0];
	ele.style.backgroundColor = '#02905a';
	ele.style.height = h +'px';


	
}]);
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
angular.module('app').directive('appCustomOptions',function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appCustomOptions.html',
		replace:true,
		scope:{
			list:'@'
		},
		link:function(scope,elem,attr){
			
		}
	}
});
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
angular.module('app').directive('componyInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/componyInfo.html',
		replace:true,
		link:function (scope,elem,attr) {
			scope.comBase = [];
			scope.$on('positionItem',function(e,data){
				scope.comBase = data[0]|| [];
			})
		}
	}
}])
angular.module('app').directive('appCustom',function($state){
	return {
		restrict:'AE',
		templateUrl:'../view/tpl/component/appCustom.html',
		replace:true,
		scope:{},
		link:function(scope,elem,attr){
			scope.custom = function(isLogin){
				if(isLogin){
					$state.go('customForPosition');
				}
				else{
					$state.go('login');
				}
			}
		}
	}
});

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
angular.module('app').directive('appFooter',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appFooter.html',
		replace:true
	}
}]);
angular.module('app').directive('appHeader',['$state',function($state){
	return{
		restrict:'AE',
		templateUrl:'../view/tpl/component/appHeader.html',
		replace:true,
		scope:{
			back:'@',
			home:'@',
			titleText:'@'
		},
		link:function(scope,elem,attrs){
			scope.titleText = scope.titleText;
			
			scope.goBack = function(){
				window.history.back();
			}

			scope.goHome = function(){
				$state.go('main');
			}
		}
	}
}])
angular.module('app').directive('appPosition',['$http','$state','$cookies',function($http,$state,$cookies){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/appPosition.html',
		replace:true,
		scope:{
			data:'='
		},
		link:function(scope,elem,attr){
			scope.goPositionDetail = function(item){
				item.viewed = true;
				$state.go('positionDetail',{'id':item.componyId});
				$cookies.put('positionId',item.positionId);
			}
		}
	}
}]);
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
angular.module('app').directive('stationDescribe',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationDescribe.html',
		replace:true,
		link:function(scope,elem,attr){
			scope.positionDescribe = [];
			scope.$on('positionItem',function(e,data){
				scope.positionDescribe = data[0].positionDescribe || [];
			});
		}
	}
}])
angular.module('app').directive('stationInfo',[function(){
	return {
		restrict:'EA',
		templateUrl:'../view/tpl/component/stationInfo.html',
		replace:true,
		link:function(scope,elem,attr) {
			scope.positionItem = [];
			scope.$on('positionItem',function(e,data){
				scope.positionItem = data[0] || [];

				console.log(scope.positionItem);
			});
		}
	}
}])
angular.module('app').filter('html',['$sce',function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	}
}])
/**
	设置;
	获取:
	删除;
**/

angular.module('app').service('storeData',function(){
	this.data = null;

	this.set = function(obj){
		return this.data = obj;
	}

	this.get = function(){
		return this.data;
	}

	this.remove = function(){
		this.data = null;
	}
});