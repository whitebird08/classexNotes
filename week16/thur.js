// https://www.reddit.com/r/dailyprogrammer/comments/3ltee2/20150921_challenge_233_easy_the_house_that_ascii/cv93tdz

// On the first line, you will recieve a number telling you how many lines the blueprint will occupy.
// After that, you will recieve some number of lines containing the blueprint. Each line is guaranteed to be less than 30 characters long. The only two characters allowed in the lines are spaces and asterisks, and there are a two assumptions you can make regarding the asterisks:
// The bottom line of asterisks (i.e. the "bottom floor"), will be one continous line of asterisks.
// All asterisks on lines except for the bottom line are guaranteed to have an asterisk directly below it. That is, there are no "free hanging" asterisks. So no balconies.
// Outputs

// You will draw that the input asterisks describe.


// The outline is just the shape you get
//  by replacing the asterisks by 3x5 boxes made of +'s, -'s and |'s. 
//  (Edit: to make it more clear what I mean with "outline", read this comment)
// The door: One box has a door on it that looks like | |. 
// The door should be placed in a random box on the ground floor.
// The windows: the windows consist of a single o in the middle of the box. 

// If a box doesn't have a door on it, there should be a 50% random chance of having a window on it.
// The roofs: Each asterisk that has no asterisk above it should have a roof over it. The roof is made of /, \ and A characters. 
// If there are two or more boxes next to each other 
// which don't have any boxes above them, 
// they should share a wider roof. 
// In other words, if you have three boxes next to each other without any boxes on top, 
// then this is right:
// var outline = +, - ,|
// var door = "| |"
// var window = 'o"  //random 50%
// var roof =  row a = "A", row b = "/  \"  //if no * then roof
// var height = for (var i = 0; i < input; i++){
// "*" 
// }
// var width = [[],[],[]];
// input = height  
// var numOfRows = s
var blueprint = [
  '  *  ', 
  ' *** ', 
  '*****'
  ]
var topRow = blueprint[0]
var bottomRow = blueprint[-1]  // var bottomWidth = blueprint[-1].length

function makeBox(){
  var box = [
  '+---+', 
  '|   |', 
  '+---+' 
  ];
  console.log(box[0]);
  console.log(box[1]);
  console.log(box[2]);
}

// makeBox(3)

function addBoxes(s){
  for(var i=0; i<s; i++){
    makeBox()
  }
}
addBoxes(3)

if ("*"){addBoxes()}

console.log(blueprint)
