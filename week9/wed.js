<form name="go">
<input type="radio" name="C1" onclick="document.bgColor='lightblue'">
<input type="radio" name="C2" onclick="document.bgColor='lightyellow'">
input type="radio" name="C3" onclick="document.bgColor='lightgreen'"<font face="Courier New">>
</form></font>

<script>
function inform(){
    alert("You have activated me by clicking the grey button! Note that the event handler is added within the event that it handles, in this case, the form button event tag")
}
</script>
 
<form>
<input type="button" name="test" value="Click me" onclick="inform()">
</form>


// Create a browser-based, single-player version of Rock Paper Scissors. 
// The "computer" should pick a random move each turn. 
// Keep a score counter somewhere on the page. 
// Don't worry about styling until you're done with the logic.
  //...see rock-paper-scissors directory in workspace


//jquery stuff


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>id demo</title>
  <style>
  div {
    width: 90px;
    height: 90px;
    float: left;
    padding: 5px;
    margin: 5px;
    background-color: #eee;
  }
  </style>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<div id="notMe"><p>id="notMe"</p></div>
<div id="myDiv">id="myDiv"</div>
 
<script>
$( "#myDiv" ).css( "border", "3px solid red" );
</script>
 
</body>
</html>

https://learn.jquery.com/using-jquery-core/selecting-elements/