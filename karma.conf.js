module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        colors: true,
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-css/angular-css.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'resources/directives/story-card/template.html',
            'resources/directives/story-card/js/module.js',
            'resources/directives/story-card/js/controller.js',
            'resources/directives/story-card/js/directive.js',
            'about/js/aboutModule.js',
            'about/js/content.js',
            'about/js/aboutController.js',
            'skills/js/skillsModule.js',
            'skills/js/skillsController.js',
            'projects/js/projectsModule.js',
            'projects/js/projectsController.js',
            'contact/js/contactModule.js',
            'contact/js/contactController.js',
            'js/indexModule.js',
            'js/router.js',
            'js/indexController.js',

            // Test specs
            'tests/resources/directives/story-card/*.js'],
        singleRun: true
    });
};
