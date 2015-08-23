var http = require('http');
 var handleRequest = function (req, res) {
   if (req.url == '/favicon.ico') return res.end();
 
  res.end('Strings are so cool! But this string will be replaced as you experiment!');
  // res.end(req.url);
 };
 
 var server = http.createServer(handleRequest);
 server.listen(8000);
 
-----
 var handleRequest = function (req, res) {
   if (req.url == '/favicon.ico') return res.end();
-    res.end(req.url.slice(1));
+    
+    var queryString = req.url.slice(1).split('?');
+    var paramsString = queryString[1];
+    var pairs = paramsString.split('&');
+    var params = {};
+    for(x in pairs){
+      var pair = pairs[x];
+      var pairVals = pair.split('=');
+      params[pairVals[0]] = pairVals[1];
+    }
+    var paramsStr = JSON.stringify(params);
+    res.end(paramsStr);
     
 };

 var http = require('http');
var fs = require('fs');
var url = require('url')

var handleRequest = function (req, res) {
  if (req.url == '/favicon.ico') return res.end();

  var test = {}
  var urlEnc1 = /[%2C]/
  var urlEnc2 = /[%2E]/
  var input = req.url.slice(6).replace(/[!@#$%^&*<>0-9]/g, ' ').replace(urlEnc1, '').replace(urlEnc2, '').split('=')

  test[input[0]] = input[1];

  res.end(JSON.stringify(test));   
};

var server = http.createServer(handleRequest);
server.listen(8000);

});
-----------------
https://docs.nodejitsu.com/articles/HTTP/clients/how-to-access-query-string-parameters

var http = require('http');
// var fs = require('fs');
var url = require('url')

var handleRequest = function (req, res) {
  if (req.url == '/favicon.ico') return res.end();


var parsedStr = url.parse(req.url, true).query
 res.end(JSON.stringify(parsedStr));  
};

var server = http.createServer(handleRequest);
server.listen(8000);

