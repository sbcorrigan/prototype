
// loads an html page fragment into the content div
function loadPage( pageName )
{	
	var pagePath = "pages/" + pageName + ".html";
	
	// only load in the body's child elements since we're an html fragment
	$( "#content" ).load( pagePath + " #body > *", function( response, status, xhr )
	{
		if ( status == "error" )
		{
			alert( "Unable to load page: " + pageName + "!\n\nPlease ensure you are using a modern browser." );
			return;
		}
		
		// initialize the page now that it's been loaded
		initPage();
	} );
}


function initPage()
{
	// replace all <i data-page="...">...</i> elements with links that load pages
	$( "i[data-page]" ).replaceWith( function()
	{
		var page = $( this ).data( "page" );
		var text = $( this ).text();
		
		return "<a href=\"#\" onclick=\"loadPage( '" + page + "' );\">" + text + "</a>";
	} );
}

function reviewApp()
{
	alert( "Here the app would switch to the phone's app store review page, where the user can review this app." );
}

function useMyLocation()
{
	alert( "By clicking on 'use my location', the relevant location text box will be filled in with the phone's location via the GPS service" );
}
function useMyNumber()
{
	alert( "By clicking on 'current number', the phone text box will be filled with the active phone's number" );
}

function foundBodyShop()
{
	alert( "By clicking on a body shop selection, the phone's map app will be started with the address automatically entered" );
}

function clickImagePlayer()
{
	alert( "By clicking the youtube player or the image, the video or image will be expanded to fit the whole screen" );
}