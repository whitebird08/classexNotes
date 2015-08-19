function likeThis(){
  console.log("like this");
}

function and(){
 console.log("and"); 
}

function likeThat(){
  console.log("like that");
}

function andA(){
  console.log("anda")
}

likeThis();
and();
likeThat();
andA();

//////////////

// setTimeout(function() {
//   console.log("Ahhh")
// },0);

// console.log("Hello? Is anyone out there?");

// setTimeout(function() {
//   console.log("Wait, I'm right here!")
// }, 500);

// console.log("Guess not...")

function likeThis(){
  console.log("like this");
  
}

function and(){
 console.log("and"); 
},

function likeThat(){
  console.log("like that");
}

function andA(){
  console.log("anda")
}

likeThis();
and();
likeThat();
andA();

///////////

// This will seem trivial at this point, but imagine our "users" are actually stored somewhere else, 
//and assume we _must_ use setTimeout to fetch those users. This will mimic what we see when we get to AJAX.

var users = [{name: "User 1", age: 100},{name: "User 2", age: 75},{name: "User 3", age: 50},{name: "User 4", age: 25}]

setTimeout(function() {
// Use the getUsers function to retrieve all users. 
//Then, map their ages, and reduce to the average age.
  var getUsers(){
   ages.reduce(function(previous, current){
    previous = 1, current = 2
    previous + current
   })
  return getUsers;
}
// people.map(function (object){
// }).filter(function (allBirthYears){
// return allBirthYears > 1965
// }))
getUsers.map(function(users){

}).filter(function (????){
  return ages.reduce
})
}, 5000)

function getUsers() {
  return users;
};

console.log("I'm doing other things");
console.log("I'm doing other things");
console.log("I'm doing other things");
//////

setTimeout (function){
var usersFromData = getUsers();
var ages = usersFromData.map(function(obj){
  return obj.age
}).reduce(fuction(prev,curr){
  return prev + curr;
})
console.log(ages);
}, 5000);

function getUsers() {
  return users;
};


////////////
// console.log('a')
// fs.readFile('file1.txt', function (err, data) {
//   console.log('b')
//   fs.readFile('file1.txt', function (err, data) {
//     console.log('c')
//   })
//   console.log('d')
// });
// console.log('e')

console.log('hi');
  setTimeout(function(){
    console.log('how');
      setTimeout(function(){
       console.log('are');
        setTimeout(function(){
          console.log('you');
          console.log('?');
        }, 3000);
      }, 2000);
  }, 1000);































