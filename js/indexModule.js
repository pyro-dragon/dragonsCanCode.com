var indexModule = angular.module("indexModule", ["ngRoute", "angularCSS", "ngSanitize",   // Native modules
                                                 "storyCard",               // Directives
                                                 "articleModule", "aboutModule", "skillsModule", "projectsModule", "contactModule"]);

 indexModule.config(['$locationProvider', function($locationProvider)
 {
    $locationProvider.hashPrefix('');
}]);
