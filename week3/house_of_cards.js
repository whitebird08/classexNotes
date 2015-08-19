/*
var game = new DiceRoller();
  game.hand;
  => [];
  */
function DiceRoller() {
  this.hand = [];  
}
var game = new DiceRoller();
console.log(game.hand)

/*Add a method to roll the dice as follows:
  var game = new DiceRoller();
  game.hand;
  =>[]
  game.roll();
  game.hand;
  => [4]
  */

function DiceRoller() {
  this.hand = [];  
  this.roll = function(){
              this.hand.push((Math.floor(Math.random() * 6) + 1))
              }
}
var game = new DiceRoller();
console.log(game.hand)

game.roll()

/*  var game = new DiceRoller();
  game.hand;
  =>[]
  game.roll(4);
  game.hand;
  => [4,5,2,3]

  */

function DiceRoller() {
  this.hand = [];  
  this.roll = function(numOfRolls){
                for (var i = 0; i < numOfRolls; i++){
                this.hand.push((Math.floor(Math.random() * 6) + 1))
                }
              }
}
var game = new DiceRoller();


game.roll(5)

console.log(game.hand)





//Add the ability to specify number of dice sides:
  //var game = new DiceRoller(9);
 // game.hand;
 // =>[]
  //game.roll(5);
  //game.hand;
  //=> [2,8,6,9,3]

function DiceRoller(sideOfDie) {
  this.hand = [];  
  this.roll = function(numOfRolls){
               
    for (var i = 0; i < numOfRolls; i++){
      if(this.hand.length < 4){
        this.hand.push((Math.floor(Math.random() * sideOfDie) + 1))
      }
    }
  }
}
var game = new DiceRoller(4);


game.roll(3)

console.log(game.hand)


game.roll(3)

console.log(game.hand)

