angular.module("app",["ui.router","ngCookies"]),angular.module("app").value("baseData",{}).run(["$http","baseData",function(t,e){t.get("data/cityList.json").success(function(t){t&&t.length&&(e.cities=t)})}]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,e){e.otherwise("/main"),t.state("main",{url:"/main",templateUrl:"view/tpl/main.html",controller:"mainCtrl"}).state("search",{url:"/search",views:{"":{templateUrl:"view/tpl/search.html",controller:function(t){t.go("search.index")}}}}).state("search.index",{url:"/index",templateUrl:"view/tpl/component/searchIndex.html",controller:"searchCtrl",params:{type:"searchIndex"}}).state("search.city",{url:"/city",templateUrl:"view/tpl/component/searchCity.html",controller:"searchCtrl",params:{type:"searchCity"}}).state("me",{url:"/me",templateUrl:"view/tpl/me.html",controller:"meCtrl"}).state("positionDetail",{url:"/positionDetail/:id",templateUrl:"view/tpl/positionDetail.html",controller:"positionDetailCtrl"}).state("login",{url:"/login",templateUrl:"view/tpl/login.html",controller:"loginCtrl"}).state("register",{url:"/register",templateUrl:"view/tpl/register.html",controller:"registerCtrl"}).state("customForPosition",{url:"/customForPosition",templateUrl:"view/tpl/customForPosition.html",controller:"customForPositionCtrl"}).state("customForCity",{url:"/customForCity",templateUrl:"view/tpl/customForCity.html",controller:"customForCityCtrl"}).state("customForSalary",{url:"/customForSalary",templateUrl:"view/tpl/customForSalary.html",controller:"customForSalaryCtrl"}).state("customForCompany",{url:"/customForCompany",templateUrl:"view/tpl/customForCompany.html",controller:"customForCompanyCtrl"}).state("customForSearch",{url:"/customForSearch",templateUrl:"view/tpl/customForSearch.html",controller:"customForSearchCtrl"}).state("city",{url:"/city",templateUrl:"view/tpl/city.html",controller:"cityCtrl"})}]),angular.module("app").controller("cityCtrl",["$scope",function(t){t.isBack=!0}]),angular.module("app").controller("customForCityCtrl",["$scope",function(t){t.isBack=!0}]),angular.module("app").controller("customForCompanyCtrl",["$scope",function(t){t.isBack=!0}]),angular.module("app").controller("customForPositionCtrl",["$scope",function(t){t.isBack=!0}]),angular.module("app").controller("customForSalaryCtrl",["$scope",function(t){t.isBack=!0}]),angular.module("app").controller("customForSearchCtrl",["$scope",function(t){t.isBack=!0}]),angular.module("app").controller("loginCtrl",["$scope","$http","$state","$cookies",function(t,e,o,i){t.user={},t.phoneChang=!1,t.pwdChange=!1,e.post("data/login.json",t.user).success(function(e){200==e.status&&(i.put("user",{id:e.userId,phone:t.user.phone}),o.go("main"))})}]),angular.module("app").controller("mainCtrl",["$scope","$http","$cookies",function(t,e,o){t.$on("$viewContentLoaded",function(){t.positionList=[],t.positionId=o.get("positionId"),e.get("data/positionList.json",{params:{limit:10}}).success(function(e){t.positionId&&e&&e.length&&(_.each(e,function(e){e.positionId==t.positionId&&(e.viewed=!0)}),o.remove("positionId")),t.positionList=e})})}]),angular.module("app").controller("meCtrl",["$scope",function(t){}]),angular.module("app").controller("positionDetailCtrl",["$scope","$stateParams","$http",function(t,e,o){t.$on("$viewContentLoaded",function(){t.positionItem=[],t.componyId=e.id,o.get("data/positionDetail.json",{params:{componyId:t.componyId}}).success(function(e){e&&e.length&&(t.positionItem=_.filter(e,{componyId:t.componyId}),t.$broadcast("positionItem",t.positionItem))})})}]),angular.module("app").controller("registerCtrl",["$scope",function(t){var e=document.documentElement.clientHeight,o=document.getElementsByClassName("register")[0];o.style.backgroundColor="#02905a",o.style.height=e+"px"}]),angular.module("app").controller("searchCtrl",["$scope","$state","$location","baseData","$cookies",function(t,e,o,i,n){t.$on("$viewContentLoaded",function(){t.isBack=!0,t.cityList=i.cities,t.currentCity="全部",n.currentCity&&n.currentCity.name&&(t.currentCity=n.currentCity.name),t.$on("cityselected",function(e,o){if(t.cityList.length)for(var i=0;i<t.cityList.length;i++)for(j=0;j<t.cityList[i].list.length;j++)t.cityList[i].list[j].id==o.id&&t.cityList[i].list[j].name==o.name?t.cityList[i].list[j].selected=!0:t.cityList[i].list[j].selected=!1;n.currentCity={name:o.name,id:o.id}}),t.searchFn=function(){console.log(1)}})}]),angular.module("app").directive("appCityList",["$state","$q",function(t,e){return{restrict:"EA",templateUrl:"../view/tpl/component/appCityList.html",replace:!0,scope:{list:"@"},link:function(e,o,i){e.data=JSON.parse(e.list),e.selectCity=function(o,i){for(var n=0;n<e.data.length;n++)for(j=0;j<e.data[n].list.length;j++)e.data[n].list[j].selected=!1;o.selected=!0,console.log(o),e.$emit("cityselected",o),t.go("search.index")}}}}]),angular.module("app").directive("appCustomOptions",function(){return{restrict:"EA",templateUrl:"../view/tpl/component/appCustomOptions.html",replace:!0,scope:{list:"@"},link:function(t,e,o){}}}),angular.module("app").directive("customTopTitle",function(){return{restrict:"EA",templateUrl:"../view/tpl/component/customTopTitle.html",replace:!0,scope:{titleText:"@"},link:function(t,e,o){t.title=t.titleText}}}),angular.module("app").directive("componyInfo",[function(){return{restrict:"EA",templateUrl:"../view/tpl/component/componyInfo.html",replace:!0,link:function(t,e,o){t.comBase=[],t.$on("positionItem",function(e,o){t.comBase=o[0]||[]})}}}]),angular.module("app").directive("appCustom",function(t){return{restrict:"AE",templateUrl:"../view/tpl/component/appCustom.html",replace:!0,scope:{},link:function(e,o,i){e.custom=function(e){e?t.go("customForPosition"):t.go("login")}}}}),angular.module("app").directive("footerBar",[function(){return{restrict:"EA",templateUrl:"../view/tpl/component/footerBar.html",replace:!0,scope:{},link:function(t,e,o){}}}]),angular.module("app").directive("appFooter",[function(){return{restrict:"EA",templateUrl:"../view/tpl/component/appFooter.html",replace:!0}}]),angular.module("app").directive("appHeader",["$state",function(t){return{restrict:"AE",templateUrl:"../view/tpl/component/appHeader.html",replace:!0,scope:{back:"@",home:"@",titleText:"@"},link:function(e,o,i){e.titleText=e.titleText,e.goBack=function(){window.history.back()},e.goHome=function(){t.go("main")}}}}]),angular.module("app").directive("appPosition",["$http","$state","$cookies",function(t,e,o){return{restrict:"EA",templateUrl:"../view/tpl/component/appPosition.html",replace:!0,scope:{data:"="},link:function(t,i,n){t.goPositionDetail=function(t){t.viewed=!0,e.go("positionDetail",{id:t.componyId}),o.put("positionId",t.positionId)}}}}]),angular.module("app").directive("appSearchBox",["$state",function(t){return{restrict:"EA",templateUrl:"../view/tpl/component/searchBox.html",replace:!0,scope:{city:"@"},link:function(t,e,o){t.city=t.city,t.search=function(){console.log("搜索..."),console.log(t.searchKey)}}}}]),angular.module("app").directive("searchHistoryKey",[function(){return{restrict:"EA",templateUrl:"../view/tpl/component/searchHistoryKey.html",replace:!0,scope:{data:"="},link:function(t,e,o){t.list=t.data,t.removeItem=function(){console.log("删除该搜索记录...")}}}}]),angular.module("app").directive("stationDescribe",[function(){return{restrict:"EA",templateUrl:"../view/tpl/component/stationDescribe.html",replace:!0,link:function(t,e,o){t.positionDescribe=[],t.$on("positionItem",function(e,o){t.positionDescribe=o[0].positionDescribe||[]})}}}]),angular.module("app").directive("stationInfo",[function(){return{restrict:"EA",templateUrl:"../view/tpl/component/stationInfo.html",replace:!0,link:function(t,e,o){t.positionItem=[],t.$on("positionItem",function(e,o){t.positionItem=o[0]||[],console.log(t.positionItem)})}}}]),angular.module("app").filter("html",["$sce",function(t){return function(e){return t.trustAsHtml(e)}}]),angular.module("app").service("storeData",function(){this.data=null,this.set=function(t){return this.data=t},this.get=function(){return this.data},this.remove=function(){this.data=null}});