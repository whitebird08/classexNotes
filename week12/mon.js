 // Given two arrays of Numbers, return an array containing elements common to both arrays, for example:

 // var test1 = [1,2,3,4,5];
 //  var test2 = [3,4,7,8,9];

 //  console.log(intersection(test1, test2)); // [3,4]

 //  var test3 = [];
  // console.log(intersection(test1, test3)); // []
  // console.log(intersection(test2, test3)); // []
var test1 = [1,2,3,4,5];
var test2 = [3,4,7,8,9];
var test3 = [];
 function intersection(array1, array2){
  var output = [];
  for(var i = 0; i < array1.length; i++){
    for(var j = 0; j < array2.length; j++){
      if(test1[i] === array2[j]){
        output.push(array2[j])
      }
    }
  }
  return output;
 }

console.log(intersection(test1, test2));
console.log(intersection(test1, test3));
console.log(intersection(test2, test3));

// If you finish this quickly, write jasmine specs to cover the expectations.

describe('intersection', function(){
  it ('returns an array containing elements common to both arrays', function(){
    var test1 = [1,2,3,4,5];
    var test2 = [3,4,7,8,9];
    expect(intersection(test1, test2)).toEqual([3,4]);
  });
  it ('returns an array containing elements common to both arrays', function(){
    var test1 = [1,2,3,4,5];
    var test3 = [];
    expect(intersection(test1, test3)).toEqual([]);
  });
  it ('returns an array containing elements common to both arrays', function(){
    var test2 = [3,4,7,8,9];
    var test3 = [];
    expect(intersection(test2, test3)).toEqual([]);
  });
});
//////
describe('intersection', function() {
  it('returns an array of the common elements of two input arrays', function() {
    expect(intersection([1,2,3,4,5],[3,4,7,8,9])).toEqual([3,4]);
  });
});

describe('intersection', function() {
  it('returns an empty array if one of the input arrays is empty', function() {
    expect(intersection([1,2,3,4,5],[])).toEqual([]);
  });
});
