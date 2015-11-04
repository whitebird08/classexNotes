// // https://www.reddit.com/r/dailyprogrammer/comments/3ggli3/20150810_challenge_227_easy_square_spirals/

var s;

var gridProb = function (s) {
  var bigArray = [];
  var smallArray = [];
  for(var i = 0; i<s; i++){
    smallArray.push("+")
  }
  for(var i = 0; i<s; i++){
    bigArray.push(smallArray)
  }
  bigArray[((s+1)/2)[smallArray.splice(((s+1)/2),1,"X")]]
  console.log(bigArray)
}
gridProb(3)
// var s = 3
// function (s){
//   x = ((s+1)/2)-1
//   return x
// }

// var input = num; // or coordinates
// var
// if(input === num){
  
//   bigArray[s+1/2[smallArray.splice(s+1/2,1,"X")]]
//   // array.splice(start, deleteCount[, item1[, item2[, ...]]])
//   //apply coordinates
// }

//else
//apply num