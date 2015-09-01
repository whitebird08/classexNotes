// Write a function called strip which removes all leading and trailing whitespace from a string, 
// but preserves whitespace not found at the beginning or end of the string.
//(like string.trim)
function strip(string){
  var x;
  var y;

  for(var i=0; i===string[i] != ' '; i++){

  if ([i] !== ' '){x = [i];}
   
  }
  for(var j=0; j===string[j] != ' '; j--){
    if ([j] !== ' '){y = [j];
    
    }
  }
  return string.slice(x,y);
}
// console.log(strip('  this is a function  '));


// You are given an array with integers between 1 and 1,000,000. One integer is in the array twice. 
// How can you determine which one?
sort + indexOf
if i = i+1
return i

 function determineWhichIsTwice(array){
  for(var i=0; i<array; i++){
    for(var j=0; j<array; j++)
  }
  if j = i 
  }
  return j
 }

// Find the only element in an array that only occurs once. 
// For example in [1,2,2,3,3,5,5,1,6], 6 is the only element that occurs precisely one time.
sort + indexOf 
for(var i=0; i<arraylength -1; i++)i+=2
if i != i+1
return i
/////////////////////
var numbers = [1,2,2,3,6,2,1,3,5,5,1];

function findUnique(array) {  
  var orderedArray = array.slice().sort();
  return orderedArray.reduce(function(previous, current) {
    return previous === current ? previous : current;
  });
}

console.log(findUnique(numbers)); //6

/////////////////

---
var hugeArray = [];

function fillHugeArray(){
  for (var i = 1; i <= 1000000; i++){
    hugeArray.push(i);
  }
  randomInteger = Math.floor(Math.random()*1000000 + 1);
  hugeArray.push(randomInteger);
  console.log("This is the randomly added integer: " + randomInteger);
}
---
function strip (string) {
  return string.replace(/^[ ]+|[ ]+$/g,'');
}
console.log(strip("   |||||hi     my name is bob|||||   "));


