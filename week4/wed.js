
function Person(name, title, evil, enemyOfKing){
   this.name = name; 
   this.title = title;
   this.evil = evil;
   this.enemyOfKing = enemyOfKing;

  var that = this;
   return {
    getName: function(){
      return that.name
    };

    return {
    setTitle: function(newTitle){
       that.title = newTitle
    };

    return {
    setEvil: function(isEvil){
      that.evil = isEvil
    };

    getEvil: function(){
      return that.evil
    }

    return {
    setEnemyOfKing: function(enemyOfKing){
      that.enemyOfKing = enemyOfKing
    };
    return {
    getEnemyOfKing: function(){
      that.enemyOfKing = enemyOfKing
    };
   }

function Castle(){
  this.people = [];
 var that = this;
  return {
    getPeople:function(){
      return that.people;
    }

    this.addPerson = function(person){
      that.people.push(person);
      
      if(person.getEnemyOfKing()){
        console.log("Go away!");
      } else {
        that.addPerson.push(person)
      }
    }
  }
}

var ryansCastle = new Castle();

var ryan = new Person("Ryan", "Knight", false, false);
var roz = new Person("Roz", "Queen", false, false)






// function Person(name, title, evil, enemyOfKing) {
//   this.name = name;
//   this.title = title;
//   this.evil = evil;
//   this.enemyOfKing = enemyOfKing;

//  ENCAPSULATION  var that = this; 

//   return {
//     getName: function () {
//       return that.name.slice();
//     },
//     setTitle: function(newTitle) {
//       that.title = newTitle;
//     },
//     getTitle: function() {
//       return that.title;
//     },
//     setEvil: function(isEvil) {
//       that.evil = isEvil;
//     },
//     getEvil: function() {
//       return that.evil;
//     },
//     setEnemyOfKing: function(enemyOfKing) {
//       that.enemyOfKing = enemyOfKing;
//     },
//     getEnemyOfKing: function() {
//       return that.enemyOfKing;
//     }
//   };
// }
// function Castle(people) {
//   this.people = people || [];
// }

///////////
//    INHERITANCE

function Car(model, make){
  this.model = model;
  this.make = make;
}
Car.prototype.getModel = function() {
  return this.model
};

class_name.prototype.method_name = function(first_argument) {
  // body...
};

///////
//   POLYMORPHISM

function Bicycle.prototype.bmx = function(){
  this.wheelSize = 24in
  this.handleBars =  crossBar
  this.brakes = foot
}

var anotherBmx = 










