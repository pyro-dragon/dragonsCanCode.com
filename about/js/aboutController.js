aboutModule.controller("aboutController", ["$scope", function($scope)
{
    // Service worker example
    $scope.webWorkerMessage = "null";

    if("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register('sw.js').then(function(reg) {
          console.log('◕‿◕', reg);
        }, function(err) {
          console.log('ಠ_ಠ', err);
        });
    }

    if(window.Worker){
        var worker = new Worker("about/js/worker.js");


    }
        $scope.webWorkerMessage = "test";

    $scope.click = function(){
        console.log("Sending a message");
        worker.postMessage("Worker Message");

        worker.onmessage = function(response){
            $scope.webWorkerMessage = response.data;
            console.log("Worker responded with: " + response.data);
        };
    };
}]);
