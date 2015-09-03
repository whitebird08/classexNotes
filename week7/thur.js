// Given an array of integers, find the maximum value in the array.
function findMax(array){
  array.reduce(function(prev, curr){
    if(prev > curr) {
      return prev
    }else{
      return current
    }
  })
}

// Given an array of integers, find the maximum value in the array.
function findMax(array){

var mutateArray = array.slice
array.sort
return sortArray[-1]
}
// Explain what call is to a JavaScript beginner, 
// you may assume that they only know how to write and invoke simple functions and assign values to variables.
call is when you request a value

var f = function(param1){
  this.foo = param1;
};
var obj = {some:'object'}
f.call(obj, 'w');
console.log(obj)
  
    {foo:'w',
      some: 'object'
      }

// A group of miners in Colorado in the late 19th century 
// are working for a ruthless mining company. 
// The mining company dictates that each day the miners 
// should have exactly 30 minutes for lunch. On top of this, 
// the miners are not provided watches or time keeping devices 
// since the company owners believe they will just get destroyed
 // when the miners inevitably blow their arms off with dynamite 
 // or die in some other horrific mining accident. 
 // Instead, the miners are given two pieces of rope, but it is no ordinary rope, 
 // this rope has the special property that when burned it acts as a timer. 
 // Of the two pieces they are given, 
 // one piece of rope burns for 15 minutes and the other for 45 minutes. 
 // Although the rope acts as a timer, 
 // the rope is unpredictable in so much as it does not burn linearly with respect to length and time. 
 // Another way to think about this is that if you cut the 15 minute rope into thirds, 
 // each third would not burn for 5 minutes, it would instead burn for an indeterminate amount of time. 
 // How can the miners use a lighter and these ropes to make sure their lunch is only 30 minutes long?
 begin burning both ropes at the same time
 start lunch after burning the "15 minute rope",
 as soon as the "45 minute rope is gone" lunch is over.
//////
// // give two strings, write a function, maxsubstring, that returns the longest substring that occurs in both strings.
//  //hint:find the pattern first
//  ex:(maxSubstring('example', 'Texas')) //exa
//  ex:('maxsubstring('coding',)
//  function maxSubstring(string1, string2){
//  }
///////!!!!!!!!!!

if(baseCase){
  else{
    recurse
  }
}
////////!!!!!!!!
// recursion using factorial as an example

function factorial(n){
  if(n === 0) return 1;  
  return n * factorial(n-1);
}
////
find maxinteger in an array.

var a = [1,10,-50,20,45,6];

function maxInArray(array){
  var max= arguments[1];

  if(array.length==0)return max;  //base case //similar to condition in a for loop

  if(!max) max=array[0];

  else 
    currentMax = array[0] > max ? array[0] : max;

  return maxInArray(array.slice(1), max) //recursive step // like incrementer in a for loop
}

function maxInArray(array){
  var max = arguments[1] || array[0];
  if (array.length == 0) return max; //BASE CASE

  var newMax = max > array[0] ? max : array[0];
  return maxInArray(array.slice(1), newMax); //RECURSIVE STEP
}
//OR
function maxInArray(array){
  function go(array, max){
  var max = arguments[1] || array[0];
  if (array.length == 0) return max; //BASE CASE

  var newMax = max > array[0] ? max : array[0];
  return maxInArray(array.slice(1), newMax); //RECURSIVE STEP
  }
  return go(array, array[0]);
}
ees







