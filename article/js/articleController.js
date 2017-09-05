angular.module("articleModule").controller("articleController", ["$scope", "$routeParams", function($scope, $routeParams)
{
		// Grab the article data
     $scope.link = $routeParams.articleLink;
}]);
