angular.module("articleModule").controller("articleController", ["$scope", "$routeParams", "articles", function($scope, $routeParams, articles)
{
		// Grab the article data
     $scope.article = articles[$routeParams.articleLink];
}]);
