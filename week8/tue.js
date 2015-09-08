https://www.hackster.io/pebble/products/pebble-time


// Explain what recursion is to a beginner developer.
when a function calls itself until it finds the base case, then completing all the subsequent functions
calls to solve a smaller problem until a known, or "base", case is reached

fibonnaci, factorials, anything that involves iteration!

forEach w/ recursion:
basecase empty array
regular case [1,2,3]

function forEach(array, callback){
  if(!array.length)return
  callback(array[0]);
  return forEach(array.slice(1), callback);
}


// Define a recursive function named power which takes two arguments; 
// a number and an exponent to raise that number to. For example:
function power(number, exponent){
if (exponent === 0) return 1;
  return base * power(base, exponent - 1)
}
//   console.log(power(2, 3));
//   //=> 8
//   console.log(power(4, 2));
//   //=> 16


// Define a recursive function named palindrome 
// that returns true if a string is a palindrome and false otherwise.
function palindrome(string){
  var noSpaces = string.replace(/\s/g, "").toLowerCase();
  function go(str){
    if (str.length <= 1) { return true };
    if (str[0] === str[str.length - 1]){
      var goString = str.slice(1);
      return go(goString.slice(0,-1));
    } else {
      return false;
    }
  }
  return go(noSpaces);
}
////
function palindrome(string) {
  var sanitizedArray = string.replace(/\W/g, "").toLowerCase().split('');

  function isPalindrome(arrayOfChars) {
    return (arrayOfChars.length <= 1)
      || (arrayOfChars.pop() === arrayOfChars.shift()
          && isPalindrome(arrayOfChars));
  }
  return isPalindrome(sanitizedArray);
}

console.log("true ?", palindrome("step on no pets")); // true
console.log("false ?", palindrome("herpderp")); // false
console.log("true ? ", palindrome('a man, a plan, a canal; panama')); // true
////
function palindrome(string){
  string = string.toLowerCase().replace(/\s/g, '');
  if(string.length <= 1) return true;
  return string.slice(0,1) !== string.slice(-1) ? false : palindrome(string.slice(1,-1));
}

////////////////////
function Node(data, next) {
  this.data = data;
  this.next = next || null; 
}

function LinkedList(head) {
  this.head = head;
}

// 1. way to do it using iteration
LinkedList.prototype.length = function() {
  var node = this.head,
      count = 0;
  while (node) {
    count++;
    node = node.next;
  }

  return count;
};

// 2. way to do it using recursion

// BASE CASE: if node is null, then return 0
LinkedList.prototype.length = function() {
  function go(node) {
    if (!node) return 0;

    return 1 + go(node.next);
  }

  return go(this.head);
};


var head = new Node('I am first');
var second = new Node('I am second');
var third = new Node('I am third');

var linkedList = new LinkedList(head);
head.next = second;
second.next = third;


// Problems with LinkedList:

// 1. Reverse a LinkedList
// 2. Insert at kth index, linkedList.insertAtIndex(node, index);
// 3. [Challenge] Re-implement LinkedList so that it has encapsulation, setHead method.
// 4. [Challenge] Re-implement Node so that it has encapsulation, setNext, removeNext method.

