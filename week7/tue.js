aligning input boxes
//html
  <form>
    <p>
      <label for="a">Short label:</label>
      <input id="a" type="text">
    </p>
    <p>
      <label for="b">Very very very long label:</label>
      <input id="b" type="text">
    </p>
  </form>
//css
    form  { display: table;      }
  p     { display: table-row;  }
  label { display: table-cell; }
  input { display: table-cell; }


// The <center> element was deprecated because it defines the presentation of its contents 
// -- it doesn't describe its contents.

// One method of centering is to set the margin-left and margin-right properties of the element to auto, 
// and then set the parent element's text-align property to center. 
// This guarantees that the element will be centered in all modern browsers.
///////// 

http://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function

http://www.tizag.com/htmlT/htmlhidden.php

 <form name="myWebForm" action="mailto:youremail@email.com" method="post">
First: <input title="Please Enter Your First Name" id="first" name="first" type="text" size="12" maxlength="12" /> Last: <input title="Please Enter Your Last Name" id="last" name="last" type="text" size="18" maxlength="24" /><br />
Password: <input type="password" title="Please Enter Your Password" size="8" maxlength="8" /><br /><br />
<input type="hidden" name="orderNumber" id="orderNumber" value="0024" /><br />
<input type="submit" value="SUBMIT" />
<input type="reset" value="RESET" />
</form>
//////eloquent chptr18
<input type="file">
<script>
  var input = document.querySelector("input");
  input.addEventListener("change", function() {
    if (input.files.length > 0) {
      var file = input.files[0];
      console.log("You chose", file.name);
      if (file.type)
        console.log("It has type", file.type);
    }
  });
</script>
///////////
localStorage.setItem("username", "marijn");
console.log(localStorage.getItem("username"));
// → marijn
localStorage.removeItem("username");
////////////
arduino

esp8266
$3.00

 tiny robots from china to hook up arduino chip to.
 eagle software to design boards



