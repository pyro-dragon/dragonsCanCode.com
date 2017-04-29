indexModule.service("activePageService", function()
{
	var activePage = "about";

	// Set the current page
	this.setActivePage = function(pageName)
    {
		activePage = pageName;
	};
});
