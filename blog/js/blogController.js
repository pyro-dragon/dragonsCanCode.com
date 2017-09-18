blogModule.controller("blogController", ["$scope", "articles", function($scope, articles) {
	$scope.articles = articles;
}]);
