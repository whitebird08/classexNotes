
//mailmerger references

////lib/data.js
module.exports = function (recipients, subject, body) {
+  var first,
+      last,
+      email,
+      personData,
+      person,
+      message,
+      messages;
+
+  return recipients.trim().split('\n').map(function (recipient) {
+    personData = recipient.split(',');
+    person = { first: personData[0], last: personData[1], email: personData[2] };
+    return {
+      recipient: person,
+      subject: replace(subject, person),
+      body: replace(body, person),
+    }
+  });
+};
+
+var replace = function (string, object) {
+  for(key in object) {
+    string = string.replace('{' + key + '}', object[key]);
+  }
+  string = string.replace('\n', '<br><br>');
+  return string;
+};

//////routes/index.js
var express = require('express');
 var router = express.Router();
+var getMessages = require('../lib/message_parser');
 
-/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });
 
+router.post('/', function(req, res, next) {
+  var recipients = req.body['message[recipients]'],
+      subject = req.body['message[subject]'],
+      body = req.body['message[body]'],
+      messages = getMessages(recipients, subject, body);
+
+  res.render('index', {
+    messages: messages,
+    recipients: recipients,
+    subject: subject,
+    body: body,
+  });
+});
+
////////index.jade
extends layout
 
 block content
-  h1= title
-  p Welcome to #{title}
+  h1 Mail Merge
+
+  form(action="/" method="post")
+    .row
+      .column
+        | Enter names / emails (one per line)
+      .column
+        | Enter the text
+    .row
+      .column
+        p
+          textarea.recipient-field(name="message[recipients]")
+            |#{recipients}
+      .column
+        p
+          input.subject-field(name="message[subject]" value=subject)
+        p
+          textarea.body-field(name="message[body]")
+            |#{body}
+    .row
+      .column
+        |&nbsp;
+      .column.text-right
+        input.preview-button(type="submit")
+        
+
+  if messages
+    .message-container
+      h2 Preview Messages
+      for message in messages
+        .message
+          .message-recipient
+            |To #{message.recipient.first} &lt;#{message.recipient.email}&gt;
+          .message-subject
+            |#{message.subject}
+          .message-body
+            |!{message.body}
