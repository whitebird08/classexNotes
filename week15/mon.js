// Write a function named removeDupes which takes a string and removes all duplicate characters in the String. 
// Here are some examples: removeDupes('AABB'); // 'AB' removeDupes('AaAaBbBb'); // 'AaBb' removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named insensitiveRemoveDupes which takes a string and removes all duplicate characters regardless of capitalization. Here are some examples:

//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AB'
//   removeDupes('cAtCaT'); // 'cAt'




function intensiveRemoveDupes(string){
  newArray = [];
  for (var i=0; i<string.length; i++){
    if(string[i] === string[i]){
      newArray.push(string[i]);
    }
  }
return newArray;
}

intensiveRemoveDupes('AABB'); 
intensiveRemoveDupes('AaAaBbBb');
intensiveRemoveDupes('cAtCaT'); 

["c", "A", "t", "C", "a", "T"]


function intensiveRemoveDupes(string){
  newArray = [];
  for (var i=0; i<string.length; i++){
    for var j=0; j<newArray.length; j++){
      if(string[i] != newArray[j]){
      newArray.push(string[i]);
    }
    
    }
  }
  return newArray;
}

intensiveRemoveDupes('AABB'); 
intensiveRemoveDupes('AaAaBbBb');
intensiveRemoveDupes('cAtCaT'); 

["c", "A", "t", "C", "a", "T"]
// try split reduce push keep working on this


////////
var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')
var allUsers = [];

function addManager(name) {
  return users.insert({name: name, position: 'manager', subordinate: 'employee'}, function(_,u) {
    return allUsers.push(u);
  })
}

function addEmployee(name, managerId){
  return users.insert({name: name, position: 'employee', subordinate: null, managerId: managerId}, function(_,u) {
    return allUsers.push(u);
  })
}

function makeTree(allUsers, position, tree) {
  var node = tree || { manager: null, employees: [] }

  allUsers.filter(function(user){
    return user.position === position;
  }).forEach(function(u){
    if(position === "manager"){
      node['manager'] = {
        name: u.name,
        id: u._id,
        position: u.position,
        manager: u.managerId || 'n/a'
      }
      return makeTree(allUsers, u.subordinate, node)
    } else {
      node['employees'].push({
        id: u._id,
        name: u.name,
        position: u.position,
        manager: u.managerId
      })
    }
  })

  return node;
}

users.remove({}).then( function () {
  return users.insert({});
}).then(function (user) {
  return addManager('Joe Rogers')
}).then( function (manager) {
  return [addEmployee('Sue Williams', manager._id), manager]
}).then(function (manager) {
  return addEmployee('Tim Burke', manager[1]._id)
}).then(function () {
  return console.log(
    JSON.stringify( makeTree(allUsers, 'manager'), null, 2 )
  );
})


