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