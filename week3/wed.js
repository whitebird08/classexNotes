// The trim() method returns the string stripped of whitespace from both ends. 
// trim() does not affect the value of the string itself.




function manualTrim(string){
  var keepString = [];
  var whitespaceString = [];
  var array = [];
    string.split()

      for(var i=0; i<string.length; i++){
        if([i] === " "){
          whitespaceString.push([i]);
        } else {
          break;
        }
      }
      for(var j= -1; j<string.length; j--)
        if([j] === " "){
          whitespaceString.push([j]);
        } else {
          break;
        }
      for(var k=0; k<string.length; k++){
        keepString.push([k]);
      }
    return keepString;
}

string.split
push to newArray

string.slice(startPoint,endPoint)

// Next, write the function that has this signature toUpperCase(string) 
// and behaves just like String.prototype.toUpperCase. 
// Check out the documentation on String.prototype.charCodeAt.


function manualToUpperCase(string){
  // var stringToArray = string.split('');
var output = '';
    for(i=0; i<string.length; i++){
      if ((string.charCodeAt[i] < 96) || (string.charCodeAt[i] > 122)){
         output += string[i]
      string.charCodeAt([i]) === (string.charCodeAt([i])-32);
     output.push( string.charCodeAt([i]);
      } else {
        output += string.charCodeAt([i])-32
      }
    }
};


///////////
// The split() method splits a String object into an array of strings 
// by separating the string into substrings.

/*answer to split
function split(string, delimiter) {
  var output = [],
      delimiter = String(delimiter) || '',
      temp = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] == delimiter || delimiter == '') {
      output.push(temp + string[i]);
      temp = '';
    } else {
      temp += string[i]; 
    }
  }

  if (temp) output.push(temp);

  return output;
}

var string = "this is a string";

console.log(split(string, ''));
// ['t','h','i','s',' ','i','s',' ','a',' ','s','t','r','i','n','g']

console.log(split(string));
// ['this is a string']

console.log(split(string, ' '));
// ['this', 'is', 'a', 'string']
*/
/////////////

// The substr() method returns the characters in a string 
// beginning at the specified location through the specified number of characters.

function manualSubstring(string, firstSub, subLength){
  output = '';

  for(var i=0; i<string.length; i++)
    console.log([i]);
    console.log(string[])
    if ((string[i] >= firstSub) || ([i] <= subLength)){
      output += [i]
    } else {
      ([i] > subLength)
        break;
      
    }



  return output;
}

 if ([i] = firstSub){
  [i] + subLength
 }


string[i]
string[i]
string[i]
string[i]
string[i]
string[i]
string[i]
string[i]
string[i]
string[i]
string[i]


function manualReplace(originalString, removeThisString, addThisString){
  for i = removeThisString[0]; i < removeThisString[-1]; i++
    if removeThisString[0] === originalString[i]
      for i=originalString[i] + = removeThisString.length
}











