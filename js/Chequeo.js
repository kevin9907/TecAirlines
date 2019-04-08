var URL = '172.18.38.132'
var SUCURSAL = "TECAirlines"

var myApp = angular.module('myApp', []);
myApp.controller("appController",function($scope,$http){
	$scope.chequearVuelo = false;
	$scope.seleccionarVuelo = true;

	$scope.chequear = function(vuelo){
		$scope.vuelo = vuelo;
		$scope.seleccionarVuelo = false;
		$scope.chequearVuelo = true;
	};

	$scope.seleccionar = function(){
		$scope.chequearVuelo = false;
		$scope.seleccionarVuelo = true;
	};

});