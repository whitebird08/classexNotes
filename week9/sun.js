[
[{meal_name:text}],
meal_item1:[
  { quantity:Number, 
    food_name: text, 
    pro_grams: Number, 
    fat_grams: Number, 
    cho_grams: Number, 
    pro_percent: Number, 
    fat_percent: Number, 
    cho_percent: Number
  }
],
]




// https://api.jquery.com/clone/


// http://stackoverflow.com/questions/5396754/how-to-get-next-or-previous-attribute-id-in-jquery
$('.getty').click(function(e) {
    e.preventDefault();
    var x = $(this).prev().attr('id');
    alert(x);

});

http://stackoverflow.com/questions/9711529/save-subset-of-mongodb-collection-to-another-collection
db.full_set.aggregate([ { $match: { date: "20120105" } }, { $out: "subset" } ]);
db.meals.aggregate([{$match: {food_name:''}}, {$out:''}])

// https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API

// if you use mongoose, you can just use(assuming you're using subdocuments and population):

Profile.findById profileId
  .select 'friends'
  .exec (err, profile) ->
    if err or not profile
      handleError err, profile, res
    else
      Status.find { profile: { $in: profile.friends } }, (err, statuses) ->
        if err
          handleErr err, statuses, res
        else
          res.json createJSON statuses
It retrieves Statuses which belong to one of Profile (profileId) friends. Friends is array of references to other Profiles. Profile schema with friends defined:

schema = new mongoose.Schema
  # ...

  friends: [
    type: mongoose.Schema.Types.ObjectId
    ref: 'Profile'
    unique: true
    index: true
  ]

          //- a(href='/food/') Select A Food
        //- input(id='meal_item1' type="button" name="select_food1" value="select a food" onclick=" location.href='/food/' ")
        //- select(name='meal_item1')
        //-   option(value='a' id='allFoods._id') cream
        //-   option(value='b' id='allFoods._id') spinach
        //-   option(value='c' id='allFoods._id') olive oil
        //-   option(value='d' id='allFoods._id') cheese
        //-     table(border='1')


// http://seanhess.github.io/2012/02/01/mongodb_relational.html

function mealWithAllFoods(id){
  var meal = db.meals.findOne({_id: id})
  meal.foods = db.foods.find({mealId: id}).toArray()
  return meal
}
// example:
// function postWithAllComments(id) {
//     var post = db.posts.findOne({_id: id})
//     post.comments = db.comments.find({postId: id}).toArray()
//     return post
// }

// function addComment(postId, comment) {
//     comment.created = Date.now()
//     comment.postId = postId
//     db.comments.save(comment)
// }

// function commentsByUser(username) {
//     return db.comments.find({"name": username}).toArray()
// }

// function commentsBetweenTimes(start, end) {
//     return db.comments.find({"created": {$gte: start, $lt: end}).toArray()
// }











