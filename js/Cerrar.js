var URL = '172.18.38.132'
var SUCURSAL = "TECAirlines"

var myApp = angular.module('myApp', []);
myApp.controller("appController",function($scope,$http){
	$scope.cerrarVuelo = false;
	$scope.seleccionarVuelo = true;

	$scope.cerrar = function(vuelo){
		$scope.vuelo = vuelo;
		$scope.seleccionarVuelo = false;
		$scope.cerrarVuelo = true;
	};

	$scope.seleccionar = function(){
		$scope.cerrarVuelo = false;
		$scope.seleccionarVuelo = true;
	};

});