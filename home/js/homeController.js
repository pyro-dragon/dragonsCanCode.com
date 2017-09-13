homeModule.controller("homeController", ["$scope", "articles", function($scope, articles) {
	$scope.articles = articles;
}]);
