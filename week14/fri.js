var db = require('monk')('localhost/promises-promises')
var User = db.get('users')

// the return value of one function becomes the parameter to the next
// promises resolve inwards first, then next
// if a function passed to then returns a promise
  // the chained functions won't be called until the promise resolves
// if a function passed to then does not return a promise
  // the chained functions will be called synchronously (immediately) without waiting

function createFigginsAndWill() {
  return User.remove({})
    .then(function f1() {
      return User.insert({name: "Figgins"})
    })
    .then(function f2(figgins) {
      return User.insert({name: "Will", managerId: figgins._id}).then(function f5(will) {
        return [figgins, will]
      })
    })
}

createFigginsAndWill().then(function f3(figginsAndWill) {
  return User.insert({name: "Finn", managerId: figginsAndWill[1]._id}).then(function f6(finn) {
    figginsAndWill.push(finn)
    return figginsAndWill
  })
})
.then(function f4(allThree) {
  console.log(allThree);
})