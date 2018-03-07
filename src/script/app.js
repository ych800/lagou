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