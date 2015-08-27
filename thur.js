// Write a function called toDecimal which takes a binary number and converts it to decimal. Here are some examples:
//   toDecimal(0); // 0
//   toDecimal(1); // 1
//   toDecimal(11); // 3
//   toDecimal(1000); // 8
//   toDecimal(1100); // 12
var biNum = 1100
function toDecimal(biNum){
var decimal = parseInt(biNum, 2)

}
toDecimal()
///////
function toDecimal(binary, base){
  var output = 0;
  for ( var i=binary.length-1, j=1 ;i>-1; i--, j*=base ){
    output += binary[i] * j;
  }
  return output;
}
///////////

// Write a function named removeDupes which takes a string and removes all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'
function removeDupes(string){
  
  var array = string.split('')
  for(var i=0; i<array.length; i++){
    for(var j=0; j<array.length; j++)
  }
  if (j = i ) array.remove(i, j)
  }
  return array
 



// Write a function named insensitiveRemoveDupes which takes a string and removes all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AB'
//   removeDupes('cAtCaT'); // 'cAt'

function insensitiveRemoveDupes(){
  string.toUpperCase().split('')
  newArray = [];
  for(var i=0; i<array; i++;){
    for(var j=0; j<array.length; j++)
  }
if (j = i ) array.remove(i, j)
}
return array
/////
function insensitiveRemoveDupes(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.toLowerCase().indexOf(str.charAt(i).toLowerCase()) < 0) {
      result += str.charAt(i);
    }
  }
  return result;
}


