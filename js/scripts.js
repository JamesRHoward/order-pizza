// Business/front end logic.
function Pizza(size, topping) {
  this.psize = size;
  this.topping = topping;
  this.price = 20;
}
Pizza.prototype.toppingPrice = function() {
  if (this.topping === "mushrooms" || this.topping === "onions" || this.topping === "pineapple" || this.topping === "olives") {
    return this.price;
  } else if (this.topping === "bacon" || this.topping === "cbacon" || this.topping === "pepperoni" || this.topping === "bbq" || this.topping === "sausage") {
    return this.price +=1;
  }
  return this.price
}

Pizza.prototype.pizzaPrice = function() {
  if (this.psize === "12") {
    return this.price -= 10;
  } else if (this.psize === "16") {
    return this.price -= 6;
  } else if (this.psize === "18") {
    return this.price -= 4;
  }
  return this.price;
}

// User Interface/back end logic.
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();
    var toppings = $("select.toppings").val();
    var newPizza = new Pizza(size, toppings);
    newPizza.pizzaPrice();
    newPizza.toppingPrice();

    $(".size").text(newPizza.psize);
    $(".toppings").text(newPizza.topping);
    $(".price").text(newPizza.price);
    $("#results").show();
  })
})
