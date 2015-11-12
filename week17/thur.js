// var array = [
//   {kidId: 1, kidName: 'Ed', toyName: 'Teddy Bear'},
//   {kidId: 1, kidName: 'Ed', toyName: 'Car'},
//   {kidId: 2, kidName: 'Su', toyName: 'Teddy Bear'},
// ]
// And return an array like this:

// [
//   {kidId: 1, kidName: 'Ed', toys: ['Teddy Bear', 'Car']},
//   {kidId: 2, kidName: 'Su', toys: ['Teddy Bear']},
// ]
// That is, remove duplicates based on the kidId, and map the toyNames into an array.

// function removeDupes(){
// var newArray = [];
//   array.filter( function(array){
//     console.log(array)
//     if(array[i] !== newArray[j]){
//       newArray.push[array[i]]
//     }
//   })
//   return newArray
// }

// console.log(removeDupes())

var array = [
  {kidId: 1, kidName: 'Ed', toyName: 'Teddy Bear'},
  {kidId: 1, kidName: 'Ed', toyName: 'Car'},
  {kidId: 2, kidName: 'Su', toyName: 'Teddy Bear'},
]

function removeDupes(array){
  var newArray = [];
  var outputArray = [];
  for(var i=0; i<array.length; i++){
    console.log(newArray[j].kidId, '...newArray')
    console.log(array[i].kidId, '...array[i]')
    console.log(outputArray, '...newArray')
    for(var j=0; j<newArray.length; j++){ 
      if(array[i].kidId == newArray[j].kidId){
        newArray.push(array[i])
      } else {
        outputArray.push(array[i])
      }
    }
  }
    return newArray
}

console.log(removeDupes(array))
//stack overflow
//only push uynique objects to array javascript 

function groupedToys(input) {
  var uniqueIds = [];
  var result = [];
  for(var i = 0; i < input.length; i ++) {
    var index = uniqueIds.indexOf(input[i].kidId);
    if(index >= 0) {
      result[index].toys.push(input[i].toyName);
    } else {
      uniqueIds.push(input[i].kidId);
      result.push({kidId: input[i].kidId, kidName: input[i].kidName, toys: [input[i].toyName]})
    }
  }
  return result;
}

/////

function dataParser(array){
  var output = []

  array.reduce(function(prev,next){
    if(!prev[next.kidId]){
      next.toys = []
      next.toys.push(next.toyName)
      delete next.toyName
      prev[next.kidId] = next
      output.push(next)
    }
    else{
      prev[next.kidId].toys.push(next.toyName)
    }
    return prev
  },{})

  console.log(output)
}

dataParser(joinedData)