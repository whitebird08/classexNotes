// Write a function which takes two linked lists and returns an array of the data that exists in both lists. 
// The following is implementation of LinkedList and Node that you may use and (sample) test cases:
//   function LinkedList(head) {
//     this.head = head;
//   }

//   function Node(data, next) {
//     this.data = data;
//     this.next = next;
//   }

  function commonDataBetweenLists(l1, l2) {
//     // your code here
        mutualDataArray = [];
          for (var i = 0; i < l1.length; i++){
           for (var j = 0; j < l2.length; j++){
            if (i = j){mutualDataArray.push([i])}
           }        
          }
        return mutualDataArray  
  }
  /////////
  ​```function commonDataBetweenLists(list1, list2) {
    var output = [];
    var currentArray = [];
    var comparatorArray = [];
    var current = list1.head;
    var comparator = list2.head;
    function goCurrent() {
        if (current === undefined) return;
        currentArray.push(current.data);
        current = current.next;
        return goCurrent();
    }
    function goComparator() {
        if (comparator === undefined) return;
        comparatorArray.push(comparator.data);
        comparator = comparator.next;
        return goComparator();
    }
    function compare(array1, array2) {
        for (var i = 0; i < array1.length; i++) {
            for (var j = 0; j < array2.length; j++) {
                if (array1[i] === array2[j]) output.push(array1[i]);    
            }
        }
        console.log(output);
        return output;
    }
    goCurrent();
    goComparator();
    compare(currentArray, comparatorArray);
}
  ///////
​```function commonDataBetweenLists(list1, list2) {
  var commonArray = [];
  var nodeFirst = list1.head;
  var nodeSecond = list2.head;

  while(nodeFirst){
      var dataToCheck = nodeFirst.data;
      while(nodeSecond){
          if(nodeSecond.data == dataToCheck){
              commonArray.push(dataToCheck);
          }
          nodeSecond = nodeSecond.next;
      }
      nodeSecond = list2.head;
      nodeFirst = nodeFirst.next;
  }
  return commonArray;
}```​
  //////
  ​```function commonDataBetweenLists(list1, list2) {
  var output = [];
  
  function go (list1Node, list2Node) {
    if (!list1Node) return;

    function goAgain (list1Node, list2Node) {
      if (!list2Node) return;
      if (list1Node.data == list2Node.data) {
        output.push(list2Node.data);
      }
      return goAgain (list1Node, list2Node.next)
    }

    var list2Node = list2.head;
    goAgain(list1Node, list2Node)
    return go (list1Node.next, list2Node)
  }

  go(list1.head, list2.head)
  return output;
}

console.log(commonDataBetweenLists(l1, l2));
////
// ['barski’]```​

// //   var l1 = new LinkedList(new Node("This is the head"));
// //   var foo = new Node('fooski');
// //   var bar = new Node('barski');
// //   l1.head.next = foo;
// //   foo.next = bar;

// //   var l2 = new LinkedList(new Node("something cool!"));
// //   var goo = new Node('gooski');
// //   var bar2 = new Node('barski');
// //   l2.head.next = bar2;
// //   bar2.next = goo;

// //   console.log(commonDataBetweenLists(l1, l2));
// //   // ['barski']

// Write a function sentenceToLinkedList that takes a sentence, 
// where a sentence is defined as a collection of words separated by a single whitespace character 
// (no need to worry about punctuation), 
// and turns the sentence into a linked list where each word is the data value of a node. 
// You may use the implementations for LinkedList and Node provided above. Usage looks like:
//   var sentence = 'This is a typical sentence';
//   console.log(sentenceToLinkedList(sentence));
//   // { head: { data: 'This', next: { data: 'is', next: [Object] } } }
​```function toLinkedList(sentence){
    var wordArray = sentence.split(' ');
    var output = new LinkedList(new Node(wordArray.shift()));
    var node = output.head;

    wordArray.forEach(function(word){
        word = new Node(word);
        node.next = word;
        node = word;
    })
    return output;
}

//toLinkedList('This is a new List’)```​
///////
​```function sentenceToLL(sentence){
  var array = sentence.split(" ");
  var linkedList = new LinkedList(new Node(array[0]));
  var newArray = array.slice(1);
  
  function go(arr){
    if (arr.length === 1){ return new Node(arr[0], null) };
    return new Node(arr[0], go(arr.slice(1)));
  }

  linkedList.head.next = go(newArray);
  return linkedList;
}```​

Andrew Mockett [10:57 AM]
post-Andreas:

Andrew Mockett [10:58 AM]
​```function sentenceToLL(sentence){
  var array = sentence.split(" ");  
  function go(arr){
    if (arr.length === 1){ return new Node(arr[0], null) };
    return new Node(arr[0], go(arr.slice(1)));
  }
  return new LinkedList(go(array));
}```​
//////
​```  function sentenceToLinkedList(sentence){
    var split = sentence.split(' ');
    function go(split, index){
      return split[index] ? new Node(split[index], go(split, index+1)) : null ;
    }
    return new LinkedList(new Node(split[0], go(split, 1)));
  }

// Write a function parensChecker which takes a single string arguement consisting of a bunch of parentheses. 
// The function should return true if the string is a valid parentheses expression. For example:
//   parensChecker("()(((())))") //=> true

//   parensChecker("())))(") //=> false

//   parensChecker(")(") //=> false

// reference reverse polish notation / rpn

function parensChecker(string){
  for (var i=0; i<string.length; i++){
    if (i = "(" )
  }
}