angular.module("storyCard").controller("storyCard", ["$scope", "$location", "$element", "$transclude", function($scope, $location, $element, $transclude)
{
    $scope.go = function()
    {
            $location.path($scope.path);
    };
}]);
