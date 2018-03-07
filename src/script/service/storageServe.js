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