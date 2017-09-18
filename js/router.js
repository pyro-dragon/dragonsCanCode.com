indexModule.config(function($routeProvider)
{
    $routeProvider
    .when("/", {
        templateUrl: "about/partial.html"
    })
    .when("/blog", {
        templateUrl: "blog/partial.html",
        controller: "blogController",
        css: "blog/css/style.css"
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
