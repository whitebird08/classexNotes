var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/pieces-db');
var piecesCollection = db.get('pieces');

//index
router.get('/pieces', function(req, res, next) {
  piecesCollection.find({}, function(err, data){
    res.render('pieces/index', { title: 'Chess Pieces', allPieces: data
    });
  });
});
//new
router.get('/pieces/new', function(req, res, next) {
  res.render('pieces/new', { title: 'New Pieces' 
  });
});
//create
router.post('/pieces', function(req, res, next) {
    var piece_name = req.body.piece_name;
    var piece_color = req.body.piece_color;
  piecesCollection.insert({ 
    piece_name: req.body.piece_name,
    piece_color: req.body.piece_color
  });
    res.redirect('pieces') 
});

// show 
router.get('/pieces/:id', function(req, res, next) {
  piecesCollection.findOne({_id: req.params.id}, function(err, data){
    res.render('pieces/show', { title: 'Shoe Piece', thisPiece: data
    });
  });
});
// edit
router.get('/pieces/:id/edit', function(req, res, next) {
  piecesCollection.findOne({_id: req.params.id}, function(err, data){
    res.render('pieces/edit', { title: 'Edit Piece', thisPiece: data
    });
  });
});

// update
router.post('/pieces/:id/edit', function(req, res, next) {
  piecesCollection.updateById(req.params.id,{ 
    piece_name: req.body.piece_name,
    piece_color: req.body.piece_color
  });
    res.redirect('/pieces/' + req.params.id) 
});


router.post('/pieces/:id/delete', function(req, res, next) {
  piecesCollection.remove({_id: req.params.id}, function(err, data){ 
    res.redirect('/pieces/') 
  });
});


module.exports = router;