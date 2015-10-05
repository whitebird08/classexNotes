// Examples:
// Save some data to the server and notify the user once it's complete.

$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
Retrieve the latest version of an HTML page.


$.ajax({
  url: "test.html",
  cache: false
})
  .done(function( html ) {
    $( "#results" ).append( html );
  });
// Send an xml document as data to the server. By setting the processData option to false, the automatic conversion of data to strings is prevented.

var xmlDocument = [create xml document];
var xmlRequest = $.ajax({
  url: "page.php",
  processData: false,
  data: xmlDocument
});
 
xmlRequest.done( handleResponse );

// Send an id as data to the server, save some data to the server, and notify the user once it's complete. If the request fails, alert the user.


var menuId = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "script.php",
  method: "POST",
  data: { id : menuId },
  dataType: "html"
});
 
request.done(function( msg ) {
  $( "#log" ).html( msg );
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});
// Load and execute a JavaScript file.


$.ajax({
  method: "GET",
  url: "test.js",
  dataType: "script"
});