var app = angular.module('app',['firebase']);

app.controller('MainController', ['$scope', '$http', '$firebaseArray' function($scope, $http,$firebaseArray){
	

	var ApiKey = 'd946a3c2-2ace-4722-a62a-13e338b446ad';

	$scope.Search = function()
	{
		var newSearch = {};

		newSearch.SummonerName = $scope.SummonerName
	}

	$scope.getRunes = $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/'{summonerIds}'/runes?api_key=' + ApiKey)
	.then(function(response){
		console.log(response)}, function(error){
			console.error(error);
		}
	})

}]);