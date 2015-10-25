var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

//Here's how you use that promise:
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
//////

      var usersRequest = new XMLHttpRequest;
      usersRequest.open('GET', '/users');
      usersRequest.responseType = 'json';
      var promise = [];
      usersRequest.addEventListener('load', function(res) {
        usersRequest.response.forEach(function(elem, i, arr) {
          promise.push(
            new Promise(function(resolve, reject) {
              var likesRequest = new XMLHttpRequest;
              likesRequest.open("GET", "/users/" + elem.id);
              likesRequest.responseType = 'json';
              likesRequest.addEventListener('load', function(res) {
                resolve(likesRequest.response.likes);
              })
              likesRequest.send();
            })
          );
        });
        Promise.all(promise).then(function(value) {
          var result = 0
          for (var i = 0; i < value.length; i++) {
            result += value[i]; };
          return document.getElementById('total-likes').innerHTML = result;
        });
      })
      usersRequest.send();