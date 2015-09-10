// What is a Linked List? What are the benefits of using a Linked List?
a data structure made up of a reference to the head and nodes (
  node is made up of data and next(pointer to next node, last node pointing to null), 
  benefits include using it to access large amounts of data in minimal steps

  you can quickly delete and insert data

// Read about the Collatz Conjecture and implement a recursive solution 
// that displays the Collatz Sequence for a given positive integer, n:
//   > console.log(collatzSequence(13));
//   13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
Take any natural number n. If n is even, divide it by 2 to get n / 2. 
If n is odd, multiply it by 3 and add 1 to obtain 3n + 1. 
Repeat the process (which has been called "Half Or Triple Plus One", or HOTPO[6]) indefinitely. 
The conjecture is that no matter what number you start with, you will always eventually reach 1. 
The property has also been called oneness.
//   > console.log(collatzSequence(252));
//   252 -> 126 -> 63 -> 190 -> 95 -> 286 -> 143 -> 430 -> 215 -> 646 -> 323 -> 970 -> 485 -> 1456 -> 728 -> 364 -> 182 -> 91 -> 274 -> 137 -> 412 -> 206 -> 103 -> 310 -> 155 -> 466 -> 233 -> 700 -> 350 -> 175 -> 526 -> 263 -> 790 -> 395 -> 1186 -> 593 -> 1780 -> 890 -> 445 -> 1336 -> 668 -> 334 -> 167 -> 502 -> 251 -> 754 -> 377 -> 1132 -> 566 -> 283 -> 850 -> 425 -> 1276 -> 638 -> 319 -> 958 -> 479 -> 1438 -> 719 -> 2158 -> 1079 -> 3238 -> 1619 -> 4858 -> 2429 -> 7288 -> 3644 -> 1822 -> 911 -> 2734 -> 1367 -> 4102 -> 2051 -> 6154 -> 3077 -> 9232 -> 4616 -> 2308 -> 1154 -> 577 -> 1732 -> 866 -> 433 -> 1300 -> 650 -> 325 -> 976 -> 488 -> 244 -> 122 -> 61 -> 184 -> 92 -> 46 -> 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
function collatzSequence(num){
  var output = '';
  function go(num){
    if(num === 1) return 1;
    output += num + '->';
    return num % 2 === 0 ? go(num/2) : go(num*3+1);
  }
  go(num);
  return output.slice(0,-2);
}
console.log(collatzSequence(13));
console.log(collatzSequence(252));
/////////
function coll(num) {
  var newNum = num;
  
  if(newNum !== 1 && newNum % 2 !== 0) {
    return newNum + " -> " + coll(3*newNum+1)
  }
  if(newNum !== 1 && newNum%2 ===0) {
    return newNum + " -> " + coll(newNum/2)
  }
  return newNum
}

console.log(coll(25232));
```​
/////
​```function collatzSequence(number) {
  var param;
  if (number == 1) {
    return 1;
  }
  number % 2 == 0 ? param = number/2 : param = (number*3)+1;
  return number + ' -> ' + collatzSequence(param);
}```​
/////
​```function collatz (n) {
  if (n === 1) return 1;
  return n + " -> " + collatz(n % 2 === 0 ? n/2 : 3*n + 1)  
}```​


// Taken from interview cake, 
// what is the resulting value that is console.log-ed in the following code example:
//   var text = 'outside';
//   function logIt(){
//       console.log(text);
//       var text = 'inside';
//   };
//   logIt();
declaration is hoisted, but not the assignment
undefined
same as...
var text = 'outside';
function logIt(){
  var text;
  console.log(text);
  text = 'inside';
}
//common interview question

///////////////
//find the longest common substring problem

//stephen's double recursion:
​```function longestSubstring(str1, str2){
  var longest = '';
  function go(str1, str2){
    if (str1.length == 0) { return 'done' };
    function vroom(str1, str2){
      if (str1.length == 0) { return 'done' };
      str2.includes(str1) && str1.length > longest.length ? longest = str1 : vroom(str1.slice(0, -1), str2);
    } 
    vroom(str1, str2);
    return go(str1.slice(1), str2)
  }
  go(str1, str2);
  return longest;
}
/////

//given two strings, write a function, maxSubstring, that returns the longest substring that occurs in both strings.

function maxSubstring(string1, string2) {
  var longestString = (string1.length >= string2.length) ? string1 : string2;
  var shortestString = (string1.length < string2.length) ? string1 : string2;
  var tmpSubstring;
  var outputString = '';

  for(var i = 0 ; i < shortestString.length ; i++) {
    for(var j = 1 ; j < shortestString.length ; j++ ) {
    tmpSubstring = shortestString.substring(i, j+1);
      if (longestString.indexOf(tmpSubstring) != -1
          && tmpSubstring.length >= outputString.length) {
            outputString = tmpSubstring;
      }
    }
  }
  return outputString;
}

console.log(maxSubstring("texas", "example")); //exa
console.log(maxSubstring("green", "agreed")); // gree
console.log(maxSubstring("green", "speed")); // ee
console.log(maxSubstring("odiferous", "ferrous acid")); // rous
console.log(maxSubstring("camp counselor", "crow")); // o
console.log(maxSubstring("javascript", "java")); // java
console.log(maxSubstring("clojurescript", "javascript")); // script
console.log(maxSubstring("Flying Gerbils", "Mad Max")); // empty string

//////
function zeroVector(length) {
  var output = [];
  for (var i = 0; i < length; i++)
    output.push(0);
  return output;
}

function zeroMatrix(rows, columns) {
  return zeroVector(rows).map(function() {
    return zeroVector(columns);
  });
}

function lcs(str1, str2) {
  var maxLength = 0, maxPosition, extraValue,
      matrix = zeroMatrix(str1.length, str2.length);

  for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        matrix[i][j] = 1 + (i - 1 >= 0 && j - 1 >= 0 ? matrix[i-1][j-1] : 0);

        if (1 + extraValue > maxLength) {
          maxLength = 1 + extraValue;
          maxPosition = i;
        }
      }      
    }   
  }

  return str1.substr((maxPosition + 1) - maxLength, maxLength);
}

var str1 = 'example', str2 = 'texas';
lcs(str1, str2);
```​
