// router.post('/signin', function(req, res, next){
//   userCollection.findOne({email:req.params.email}).then(function(user){
//     if (user) {
//       var hash = bcrypt.hashSync(req.body.password, 8)
//       if (bcrypt.compareSync(hash, user.password)){
//         req.session.user = user
//         res.redirect('/')
//       }
//         else {
//           res.render('signin', error: 'Email / Password do not match')
//         } else {
//           res.render('signin', error: 'Email / Password do not match')
//         } 
//         res.redirect('/signin')
//     }
//   })
// })