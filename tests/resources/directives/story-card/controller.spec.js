describe("Story Card Directive", function()
{
    var compile;
    var rootScope;
    var element;
    var controller;

    beforeEach(module('storyCard'));

    beforeEach(inject(function($rootScope, $compile)
    {

        // inject(function($compile, $rootScope)
        // {
        //     compile = $compile;
        //     rootScope = $rootScope.$new();
        // });

        element = $compile('<story-card title="test" caption="test"></story-card>')($rootScope);
        controller = element.controller('story-card');

        $rootScope.$digest();
        console.log(controller);


        //element = getCompiledElement();



    }));

    function getCompiledElement()
    {
        var element = angular.element('<story-card title="test" caption="test"></story-card>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    describe("The controller", function()
    {
        it("should return something", function()
        {
            var isolatedScope = element.isolateScope();

            isolatedScope.go();

            expect(4+4).toBe(8);
        });
    });
});
