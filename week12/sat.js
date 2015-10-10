var checkBoxes = $("input[type=checkbox]");
  var prices = checkBoxes.map(function(i, elem) {
    return elem.value;
  })
​
  var allHomes = {};
  prices.each(function(i, elem) {
    allHomes[elem] = [];//a function that creates a new array for each category
  })
​
  var filterHome = function(home) {
    var price = parseInt($(home).attr("data-price"));
    for (filterPrice in allHomes) {
      if (price <= parseInt(filterPrice)) {
        return allHomes[filterPrice].push(home);
      }
    }// creates a function(homeToCategory) to push a home to its corresponding categoryArray
  }
​
  $(".home").each(function(i, elem) {
    filterHome(elem);
  }) //puts each home in the correct category by invoking 
​
  prices.each(function(i, elem) {
    $("input[value=" + elem + "]").on("click", function() {
      $(".home").hide();
      var checkedFilters = $("input:checked").map(function() { return this.value })
      if (checkedFilters.length === 0) {
        $(".home").show();
      }//returns items in categories that match those with an input value of checked
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