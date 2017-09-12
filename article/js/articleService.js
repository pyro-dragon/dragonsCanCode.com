angular.module("articleModule").controller("articleService", function()
{
    var currentArticleIndex = "";

    function setCurrentArticleIndex(articleIndex)
    {
        currentArticleIndex = articleIndex;
    }

    function getCurrentArticleIndex()
    {
        return currentArticleIndex;
    }

    return {
        setCurrentArticleIndex: setCurrentArticleIndex,
        getCurrentArticleIndex: getCurrentArticleIndex
    }
}]);
