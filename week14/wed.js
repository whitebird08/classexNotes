// Create a shopping cart that starts out as empty
// Create items that have a price and name
// Allow items to be added to the cart
// Allow items to be removed from the cart
// Give a shopping cart the ability to give the total price of all items in the cart
// Give a shopping cart the ability to take a percentage discount from the total price

//////
var Shopping = require("../src/shopping.js");
var Item = require("../src/items.js");


describe("Shopping", function(){

  it("Starts out empty", function(){
    var shopping = new Shopping();
    expect(shopping.empty).toEqual(true);
  })

  it("item has price and name", function(){
    var item = new Item(5, "taco")
    expect(item.price).toEqual(5);
    expect(item.name).toEqual("taco");
  })

  it("add item to shopping cart", function(){
    var item = new Item(5, "taco")
    var shopping = new Shopping();
    shopping.add(item)
    var item2 = new Item(5, "taco")
    shopping.add(item2)
    expect(shopping.items).toEqual([item,item2])
  })

  it("remove item from shopping cart", function(){
    var item = new Item(5, "taco")
    var shopping = new Shopping();
    shopping.add(item)
    var item2 = new Item(6, "burrito")
    shopping.add(item2)
    expect(shopping.items).toEqual([item,item2])
    shopping.remove("burrito")
    expect(shopping.items).toEqual([item])
    console.log(shopping.items);
  })

  it("total price shopping cart", function(){
    var item = new Item(5, "taco")
    var shopping = new Shopping();
    shopping.add(item)
    var item2 = new Item(6, "burrito")
    shopping.add(item2)
    expect(shopping.total).toEqual(11)
  })

  it("discount shopping cart", function(){
    var item = new Item(5, "taco")
    var shopping = new Shopping();
    shopping.add(item)
    var item2 = new Item(10, "burrito")
    shopping.add(item2)
    expect(shopping.total).toEqual(15)
    shopping.discount(20)
    expect(shopping.total).toEqual(12)
  })

})