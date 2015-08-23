 
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