// Tested in Jan 2021 for Brackets Editor of version 1.14.2 on Windows 10

define( function( br_r, br_e, br_m )
{
	"use strict";

	var AppInit = brackets.getModule( "utils/AppInit" );
	AppInit.appReady( function()
	{
		// Declaration
		var t, // target
		    c, // config of observer
		    o; // observer

		// Attributes
		t = document.body;
		c = { childList: true };

		// Create an observer with action
		o = new MutationObserver( function()
		{
			// Reference
			var d = document.querySelector( "div.ext-changed-dialog button[ data-button-id='cancel' ]" );

			// Action
			if( d ) d.click();
		});

		// Start observing
		o.observe( t, c );
	});
});
