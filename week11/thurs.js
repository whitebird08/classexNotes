// Write a function that takes nested arrays and turns it into nested objects. 
// If you solve it one way, then solve it another.

// var books = [
//   ["Learn to Program", "Chris Pine", 1934356360],
//   ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
// ]

// bookData(books)
// //-> {
//   "1934356360": {
//     "title": "Learn to Program",
//     "author": "Chris Pine",
//     "isbn10": 1934356360
//   },
//   "1593275846": {
//     "title": "Eloquent Javascript",
//     "author": "Marijn Haverbeke",
//     "isbn10": 1593275846
//   }
// }

var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
 ];

function arrToObj(books){
  output = {};
  for(var i=0; i < books.length; i++){
    output[i] = books[i];
  }
  return output;
}

console.log(arrToObj(books));
/////

var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
 ];
function dothis(array){
  for(var i=0; i < array.length; i++){
  dothis(array[i]) === {
    'title': array[i][0],
    'author': array[i][1],
    'isbn10': array[i][2]
  };
  return dothis();
  } 
}

dothis(books);

















