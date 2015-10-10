  
  //filter

  $('input').on('click', function(){
    // $('.home').hide();
   if (parseInt($(this).attr("value")) <= 49000) {
    // show all cabins with a dataprice <= 49000
    var arry = $(".home").filter(
      function(elem) { 
         return (parseInt($(this).attr("data-price"))<= 49000)
      }
    );
    console.log(arry);
    arry.show();
   }  


//sort





$(document).ready(function() {
  // Toggling Backgrounds
​
  $("span.dark").on("click", function() {
    $("body").css({"background-image": "url(img/dark_wood.png)",
                    "background-size": "auto",
                  });
  });
​
  $("span.light").on("click", function() {
    $("body").css("background-image", "url(img/tileable_wood_texture.png)");
    $("body").css("background-size", "auto");
  });
​
  $("span.forest").on("click", function() {
    $("body").css({"background-image": "url(img/forest.jpg)",
                    "background-size": "cover",
                  });
  });
​
  // Begin Filtering
​
  var checkBoxes = $("input[type=checkbox]");
  var prices = checkBoxes.map(function(i, elem) {
    return elem.value;
  })
​
  var allHomes = {};
  prices.each(function(i, elem) {
    allHomes[elem] = [];
  })
​
  var filterHome = function(home) {
    var price = parseInt($(home).attr("data-price"));
    for (filterPrice in allHomes) {
      if (price <= parseInt(filterPrice)) {
        return allHomes[filterPrice].push(home);
      }
    }
  }
​
  $(".home").each(function(i, elem) {
    filterHome(elem);
  })
​
  prices.each(function(i, elem) {
    $("input[value=" + elem + "]").on("click", function() {
      $(".home").hide();
      var checkedFilters = $("input:checked").map(function() { return this.value })
      if (checkedFilters.length === 0) {
        $(".home").show();
      }
      for (filterPrice in allHomes) {
        checkedFilters.each(function(i, value) {
          if (filterPrice === value) {
            return allHomes[filterPrice].forEach(function(elem) {
              $(elem).show();
            });
          };
        });
      };
    });
  });
​
  // Sorting
​
  function desc_sort(a, b){
    console.log("comparing " + $(a).attr('data-price') + "to" + $(b).attr('data-price'))
    return (($(b).attr('data-price')) - $(a).attr('data-price'));
  }
​
  function asc_sort(a, b){
    console.log("comparing " + $(a).attr('data-price') + "to" + $(b).attr('data-price'))
    return ($(a).attr('data-price') - ($(b).attr('data-price')));
  }
​
​
  $(".low").on("click", function(e) {
    $(".home").sort(asc_sort).appendTo($(".image-container"))
    e.preventDefault();
  });
​
  $(".high").on("click", function(e) {
    $(".home").sort(desc_sort).appendTo($(".image-container"))
    e.preventDefault();
  });
​
})


//pagination
???
page = 0
[[home, home], [home, home]]
hide all, 
show page[i]









