indexModule.controller("indexController", function($scope)
{
    $scope.hello = function()
    {
    	return "Hello all";
    };

	$scope.getLocation = function(location)
	{
		if(angular.isDefined(location))
		{
			if(location === $location.path())
			{
				return true;
			}

			return false;
		}

		return $location.path;
	};
});
