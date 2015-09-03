app.get('/:from-to:',function(req,res){
  var from = parseInt(req.params.from, 10),
  var to = parseInt(req.params.to, 10);

  res.json(names.slice(from, to+1));
})
///
if(req.params[1])
  res.send('editing user with an id '+req.params[1]);
else
  rex.send('viewing user id:'+req.params[0]);
////syntax for jade
.parent
  .recipientPreviews  Recipient Previews 
    p= contacts
    p #{subject}
    p #{message}
//syntax for res.render etc 
var express = require('express');
var router = express.Router();
// var data = require('../node_modules/express/lib/data.js') 

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merge' });
});
router.post('/', function(req, res, next) {
  //conditional here? updatePage=true
  // var updatePage ??????
  var contacts = req.body.contacts
  console.log(contacts)
  var subject = req.body.subject
  console.log(subject)
  var message = req.body.message
  console.log(message)

  res.render('index', {
    contacts: contacts,
    subject: subject,
    message: message
  });
});

module.exports = router;
 