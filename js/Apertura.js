var URL = '172.18.38.132'
var SUCURSAL = "TECAirlines"

var myApp = angular.module('myApp', []);
myApp.controller("appController",function($scope,$http){
	$scope.confirmarPasajero = false;
	$scope.seleccionarVuelo = true;

	$scope.apertura = function(vuelo){
		$scope.vuelo = vuelo;
		$scope.seleccionarVuelo = false;
		$scope.confirmarPasajero = true;
	};

	$scope.seleccionar = function(){
		$scope.confirmarPasajero = false;
		$scope.seleccionarVuelo = true;
	};

});