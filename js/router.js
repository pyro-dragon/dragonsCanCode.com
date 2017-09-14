indexModule.config(function($routeProvider)
{
    $routeProvider
    .when("/", {
        templateUrl: "home/partial.html",
        controller: "homeController"
    })
    .when("/home", {
        templateUrl: "home/partial.html",
        controller: "homeController",
        css: "home/css/style.css"
    })
    .when("/about", {
        templateUrl: "about/partial.html"
    })
    .when("/skills", {
        templateUrl: "skills/partial.html",
        controller: "skillsController",
        css: "skills/css/style.css"
    })
    .when("/projects", {
        templateUrl: "projects/partial.html",
        controller: "projectsController"
    })
    .when("/contact", {
        templateUrl: "contact/partial.htm",
        controller: "contactController"
    })
	.when("/article/:articleLink", {
		templateUrl: "article/partial.html",
		controller: "articleController",
        css: "article/css/style.css"
	});
});
