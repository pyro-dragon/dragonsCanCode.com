angular.module("storyCard").directive("storyCard", function()
{
    return{
        restrict: "E",
        scope:{
            title: "@",
            caption: "@",
            path: "@"
        },
        transclude: true,
        templateUrl: "resources/directives/story-card/template.html",
        controller: "storyCard"
    };
});
