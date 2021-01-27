/*
	I don’t know why, but my Brackets Editor
	started to show me “External changes” dialog
	even on switching applications. Maybe because
	of changing my HDD for SSD, or Git extension
	or changing my OS to Windows 10.

	So, I created this my first plugin.

	It is mutation listener of body element.
	It listens its childList, so on a change
	it finds out the existance of that dialog
	and its cancel button, and if that exists,
	it click on it.

	Graphic designer
	& amateur fullstack developer

	Jiří Dvořák
	info@dvorakj.com


	// Tested in Jan 2021 for Brackets Editor of version 1.14.2 on Windows 10
*/


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