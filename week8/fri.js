// Write a function parensChecker which takes a single string arguement consisting of a bunch of parentheses. 
// The function should return true if the string is a valid parentheses expression. For example:
//   parensChecker("()(((())))") //=> true

//   parensChecker("())))(") //=> false

//   parensChecker(")(") //=> false
function parensChecker(string){
  newArray =[];
  for (var i=0; i<string.length; i++){
    if (i === ")" && i + 1 === "(" ) 
      newArray = string.split( ')', '(' )
  }
  for (var j=0; j > newArray.length; j++){
      function reverse(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
          o += s[i];
        return o;
      }
    }
    if (newArray2 = newArray)return true
  }
}
////////
​```function parensChecker(string) {
  var chars = string.split('');
  var level = chars.reduce(function(prev, curr) {
    if (prev >= 0) {
      if (curr == '(') prev +=1;
      else prev -=1;
      return prev;
    }
    return prev;
  }, 0);
  return level === 0;
}```​
/////////
// Create an algorithm for the AI by EOD Monday - 1 submission per cohort!
// Instructors will test and determine the winner
var playerMoves = [],
    computerMoves = [], 
    playerPoints = 0,
    computerPoints = 0,
    numberOfGames = 0,
    playerGameChanger,
    computerGameChanger;
function play(){
  var playerNum = Number(prompt('Pick a number, bitch'));
  var computerNum = computerLogic();
  compare(playerNum, computerNum);
  playerMoves.push(playerNum);
  computerMoves.push(computerNum);
  updateScoreboard(playerNum, computerNum);
  if (playerPoints == 5 || computerPoints == 5){
    return gameOver();
  }
  play();
}
function compare(playerNum, computerNum){
  if (playerNum - computerNum == 1){
    playerPoints += 2;
    playerGameChanger = true;
    console.log('Player recieved 2 points');
  }
  else if (computerNum - playerNum == 1){
    computerPoints += 2;
    computerGameChanger;
    console.log('Computer recieved 2 points');
  }
  else if (playerNum < computerNum){
    playerPoints++;
    console.log('Player recieved 1 point');
  }
  else if (computerNum < playerNum){
    computerPoints++;
    console.log('Computer recieved 1 point');
  }
  else {
    console.log('It\'s a tie');
  }
  
}
function computerLogic(){
  
}
function gameOver(){
  if (playerPoints == 5){
    console.log('Player wins');
  }
  if (computerPoints == 5){
    console.log('Computer wins')
  }
  playerMoves = [];
  computerMoves = [];
  playerPoints = 0;
  computerPoints = 0;
  numberOfGames++;
}
function updateScoreboard(playerNum, computerNum){
  console.log('Player chose ' + playerNum);
  console.log('Player moves so far  ' + playerMoves);
  console.log('Computer chose ' + computerNum);
  console.log('Computer moves so far ' + computerMoves);
}
var playNow = prompt('Do you want to play?').toLowerCase();
if (playNow == 'yes'){
  play();
}
1 Comment